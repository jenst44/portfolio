import FlappyGamePlayer from "./FlappyGamePlayer";
import FlappyGamePipes from "./FlappyGamePipes";
import FlappyGameBG from "./FlappyGameBG";

class FlappyGame{

    constructor() {
        var elem = document.querySelector('#flappy-game-container');
        this.config = {
            width: window.innerWidth,   
            height: elem.offsetHeight
        }
        this.last_time_update;
        this.state = "start_screen";
        this.current_score = 0;
    
        this.create();
    
        window.requestAnimationFrame(this.update.bind(this))
    
        this.canvas.addEventListener('click', this.click.bind(this));
        window.addEventListener('resize', this.windowResize.bind(this));
    
        this.score_container = document.querySelector('.platformer__info__score__value');
    
    
        popup_manager.events.listen('how-to__close', function(){
            this.state = 'playing';
        }.bind(this));
    
        popup_manager.events.listen('how-to__open', function(){
            this.state = 'paused';
        }.bind(this));
    }

    start(){
        this.current_score = 0;
        this.state = "playing";
    }
    
    isStartScreen(){
        return this.state === "start_screen"
    }
    
    isPlaying(){
        return this.state === "playing"
    }
    
    isPaused(){
        return this.state === "paused"
    }
    
    isDead(){
        return this.state === "dead"
    }
    
    create(){
    
        // Setup canvas
        this.canvas = document.getElementById('flappy-game-container');
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;
        this.context = this.canvas.getContext("2d");
    
        // Create player
        this.player_controller = new FlappyGamePlayer(this);
    
        // Create pipes
        this.pipe_controller = new FlappyGamePipes(this);
        // Create pipes
        this.bg_controller = new FlappyGameBG(this);
    }
    
    clear(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    
    update(timestamp){
        if(this.isPlaying()){
            if(!this.last_time_update) this.last_time_update = timestamp;
            const elapsed = timestamp - this.last_time_update;
            this.clear();
            this.bg_controller.update(elapsed, timestamp);
            this.pipe_controller.update(elapsed, timestamp);
            this.player_controller.update(elapsed, timestamp);
    
            this.context.drawImage(
                this.bg_controller.canvas, 0,0
            )
            this.context.drawImage(
                this.pipe_controller.canvas, 0,0
            );
            this.context.drawImage(
                this.player_controller.canvas,
                this.player_controller.current_position.x,
                this.player_controller.current_position.y
            );
    
            this.updateScore();
            this.last_time_update = timestamp;
    
            if(this.detectOverlap()){
                this.die();
            }
        } else {
            this.last_time_update = timestamp;
        }
        window.requestAnimationFrame(this.update.bind(this));
    }
    
    
    updateScore(timestamp){
        var p_width = this.pipe_controller.pipe_width;
        var pipes = this.pipe_controller.pipes;
        for(var ii = 0; ii < pipes.length; ii ++){
            if(pipes[ii].next_pipe) {
                if(pipes[ii].x + p_width/2  < this.player_controller.current_position.x){
                    this.current_score ++;
                    this.player_controller.score();
                    this.pipe_controller.pipes[ii].next_pipe = false;
                    this.pipe_controller.pipes[ii - 1].next_pipe = true;
                }
            }
        }
    
        this.score_container.textContent = this.current_score;
    
    }
    
    die(){
    
        this.player_controller.set_display_type('die');
        this.show_end();
        this.state = "dead";
    }
    
    windowResize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.pipe_controller.updateSize();
    }
    
    click(){
    
        if(this.isStartScreen()){
            this.reset();
        } else if(this.isPlaying()){
            this.player_controller.fly();
        } else if (this.isDead()){
        }
    };
    show_end(){
        var el = document.querySelector('.platformer__popup .score');
        if (el) el.innerHTML = this.current_score;
        var el = document.querySelector('.platformer__popup .item');
        if (el) {
            if (this.current_score == 1 ) {
                el.innerHTML = 'pipe';
            } else {
                el.innerHTML = 'pipes';
            }
        }
    
        document.querySelector('.platformer__popup').style.display = 'flex';
    }
    
    reset(){
        this.player_controller.reset();
        this.pipe_controller.reset();
        this.start();    
    };
    
    detectOverlap(){
        var pipes = this.pipe_controller.pipes;
        var player_obj = {
            x: this.player_controller.current_position.x,
            y: this.player_controller.current_position.y,
            w: this.player_controller.canvas.width,
            h: this.player_controller.canvas.height
        };
    
        for(var ii = 0; ii < pipes.length; ii ++) {
            
            var pipe = pipes[ii];
            
            // Check top bar overlap
            if(this.doInterset(player_obj, pipe.current_position.top)){
                return this.checkHit({
                    img: this.player_controller.get_display_image(),
                    x: this.player_controller.current_position.x,
                    y: this.player_controller.current_position.y,
                    w: this.player_controller.player_size.width,
                    h: this.player_controller.player_size.height
                },{
                    img: this.pipe_controller.top_image,
                    x: pipe.current_position.top.x,
                    y: pipe.current_position.top.y,
                    w: pipe.current_position.top.w,
                    h: pipe.current_position.top.h
                });
            }
            
            // Check bottom bar overlap
            if(this.doInterset(player_obj, pipe.current_position.bottom)){
                return this.checkHit({
                    img: this.player_controller.get_display_image(),
                    x: this.player_controller.current_position.x,
                    y: this.player_controller.current_position.y,
                    w: this.player_controller.player_size.width,
                    h: this.player_controller.player_size.height
                },{
                    img: this.pipe_controller.bottom_image,
                    x: pipe.current_position.bottom.x,
                    y: pipe.current_position.bottom.y,
                    w: pipe.current_position.bottom.w,
                    h: pipe.current_position.bottom.h
                });
            }
        }
    
        return false;
    }
    
    doInterset(obj1, obj2){
    
        var x_overlap = false;
        var y_overlap = false;
    
        if(obj1.x < obj2.x && obj1.x + obj1.w > obj2.x) {
            x_overlap = true;
        } else if(obj2.x < obj1.x && obj2.x + obj2.w > obj1.x){
            x_overlap = true;
        }
    
        if(obj1.y < obj2.y && obj1.y + obj1.h > obj2.y) {
            y_overlap = true;
        } else if(obj2.y < obj1.y && obj2.y + obj2.h > obj1.y){
            y_overlap = true;
        }
    
        return x_overlap && y_overlap;
    
    }
    
    checkHit(img_1_obj, img_2_obj){
        var ax,aw,ay,ah,ctx,ctx1,i,w,w1,h,h1,x,y,x1,y1;
        w = img_1_obj.w;
        h = img_1_obj.h;
        w1 = img_2_obj.w;
        h1 = img_2_obj.h;
        x = img_1_obj.x;
        y = img_1_obj.y;
        x1 = img_2_obj.x;
        y1 = img_2_obj.y;
        // function to check if any pixels are visible
        function checkPixels(context,w,h){    
            if ((!w) || (!h)) return false;
            try {
                var imageData = new Uint32Array(context.getImageData(0,0,w,h).data.buffer);
                var i = 0;
                // if any pixel is not zero then there must be an overlap
                while(i < imageData.length){
                    if(imageData[i++] !== 0){
                        return true;
                    }
                }    
            } catch (e) {}
            return false;
        }
        
        // check if they overlap
        if(x > x1 + w1 || x + w < x1 || y > y1 + h1 || y + h < y1){
            return false; // no overlap 
        }
        // size of overlapping area
        // find left edge
        ax = x < x1 ? x1 : x;
        // find right edge calculate width
        aw = x + w < x1 + w1 ? (x + w) - ax : (x1 + w1) - ax
        // do the same for top and bottom
        ay = y < y1 ? y1 : y;
        ah = y + h < y1 + h1 ? (y + h) - ay : (y1 + h1) - ay
        
        // Create a canvas to do the masking on
        var pixCanvas = document.createElement("canvas");
        pixCanvas.width = aw;
        pixCanvas.height = ah;
        ctx = pixCanvas.getContext("2d");
        
        // draw the first image relative to the overlap area
        ctx.drawImage(img_1_obj.img,x - ax, y - ay, w, h);
        
        // set the composite operation to destination-in
        ctx.globalCompositeOperation = "destination-in"; // this means only pixels
                                                         // will remain if both images
                                                         // are not transparent
        ctx.drawImage(img_2_obj.img,x1 - ax, y1 - ay, w1, h1);
        ctx.globalCompositeOperation = "source-over"; 
        
        // now draw over its self to amplify any pixels that have low alpha
        if(pixCanvas.width && pixCanvas.height){
            for(var i = 0; i < 32; i++){
                ctx.drawImage(pixCanvas,0,0);
            }
    
        }
        // create a second canvas 1/8th the size but not smaller than 1 by 1
        var pixCanvas1 = document.createElement("canvas");
        ctx1 = pixCanvas1.getContext("2d");
        // reduced size rw, rh
        rw = pixCanvas1.width = Math.max(1,Math.floor(aw/8));
        rh = pixCanvas1.height = Math.max(1,Math.floor(ah/8));
        // repeat the following untill the canvas is just 64 pixels
        while(rw > 8 && rh > 8){
            // draw the mask image several times
            for(i = 0; i < 32; i++){
                ctx1.drawImage(
                    pixCanvas,
                    0,0,aw,ah,
                    Math.random(),
                    Math.random(),
                    rw,rh
                );
            }
            // clear original
            ctx.clearRect(0,0,aw,ah);
            // set the new size
            aw = rw;
            ah = rh;
            // draw the small copy onto original
            ctx.drawImage(pixCanvas1,0,0);
            // clear reduction canvas
            ctx1.clearRect(0,0,pixCanvas1.width,pixCanvas1.height);
            // get next size down
            rw = Math.max(1,Math.floor(rw / 8));
            rh = Math.max(1,Math.floor(rh / 8));
        }
        
        pixCanvas = undefined;  // release ref
        pixCanvas1 = undefined;
        // check for overlap
        return checkPixels(ctx,aw,ah);
    }

}


export default FlappyGame;