class FlappyGamePipes {

    constructor(game){

        this.config = {
            top_image_src : "/assets/img/flappy/pipe-top.svg",
            bottom_image_src : "/assets/img/flappy/pipe-bottom.svg",
            gap_percentage: .4,
            opening_range: .35,
            pipe_speed: .0001
        }

        this.game = game;
        this.image;
        this.pipes = [];
        this.current_offset = 0;

        this.create();
    }

    create(){
        
        // Setup canvas
        this.canvas = document.createElement('canvas');
        this.updateSize();
        this.context = this.canvas.getContext("2d");
    
        // Load pipe images
        this.top_image = new Image();
        this.top_image.src = this.config.top_image_src
        this.bottom_image = new Image();
        this.bottom_image.src = this.config.bottom_image_src
    }
    
    updateSize(){
        
        // Setup canvas
        this.pipe_width = this.game.canvas.width / 5;
        this.canvas.width = this.game.canvas.width
        this.canvas.height = this.game.canvas.height
        this.pipe_gap = this.pipe_width * 3;
        this.opening_gap = this.canvas.height * this.config.gap_percentage;
        this.spawn_x = this.canvas.width + this.pipe_width;
    }
    
    update(elapsed){
        this.drawPipes(elapsed);
    }
    
    drawPipes(elapsed){
        this.clear();
        if(!this.pipes[0] || this.pipes[0].x < (this.spawn_x - this.pipe_gap)) {
            this.addPipe();
        }
    
        for(var ii = 0; ii < this.pipes.length; ii ++){
            if(this.pipes[ii].x < -this.pipe_width) {
                this.pipes.splice(ii, this.pipes.length - ii);
                break;
            }
            
            this.pipes[ii] = this.drawPipe(this.pipes[ii]);
            var new_x;
    
            if(this.game.isPlaying()) {
               var x_off = elapsed * ( this.game.config.width * this.config.pipe_speed );
                new_x = Math.floor( this.pipes[ii].x - x_off); // elapsed * this.config.pipe_speed );
    
    //            new_x = Math.floor( this.pipes[ii].x - elapsed * this.config.pipe_speed );
            } else {
                new_x = this.pipes[ii].x
            }
    
            if(Number.isInteger(new_x)) {
                this.pipes[ii].x = new_x;
            }
            
        }
        
    
    }
    
    
    addPipe(){
        var min = ((1 - this.config.opening_range) / 2);
        var max = (min + this.config.opening_range);
        var opening_position_percentage = (Math.random() * (max * 10 - min * 10 + 1) + min * 10) / 10;
    
        this.pipes.unshift({
            next_pipe: this.pipes.length === 0,
            opening_position_percentage: opening_position_percentage,
            x: this.spawn_x
        })
    }
    
    drawPipe(pipe){
    
        var opening_middle = Math.floor(pipe.opening_position_percentage * this.canvas.height);
        var top_bar_height = opening_middle - (this.opening_gap / 2);
        var bottom_bar_height =  top_bar_height + this.opening_gap;
        var bottom_bar_y =  opening_middle + this.opening_gap / 2;
        pipe.current_position = {
            top: {
                x: pipe.x,
                y: 0,
                h: top_bar_height,
                w: this.pipe_width
            },
            bottom: {
                x: pipe.x,
                y: bottom_bar_y,
                h: bottom_bar_height,
                w: this.pipe_width
            }
        }
    
        // Draw top pipe
        this.context.drawImage(
            this.top_image,
            pipe.x,
            0,
            this.pipe_width,
            top_bar_height
        );
    
        // Draw bottom pipe
        this.context.drawImage(
            this.bottom_image,
            pipe.x,
            bottom_bar_y,
            this.pipe_width,
            bottom_bar_height
        );
    
        return pipe;
    
    }
    
    clear(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    
    reset(){
        this.pipes = [];
        this.clear();
    }
}


export default FlappyGamePipes;