class FlappyGameBG{

    constructor(game){

        this.config = {
            img_src : "/assets/img/flappy/unicat-cloud-bg.svg",
            bg_speed: .05,
            img_aspect: 16.0/9.0
        }

        this.game = game;
        this.image;
        this.x = 0;
        this.create();
    }

    create(){
        
        // Setup canvas
        this.canvas = document.createElement('canvas');
        this.updateSize();
        this.context = this.canvas.getContext("2d");
    
        // Load pipe images
        this.img = new Image();
        this.img.onload = function(){
            this.drawBG();
        }.bind(this);
    
        this.img.src = this.config.img_src;
    }
    
    updateSize(){
        this.canvas.width = this.game.canvas.width;
        this.canvas.height = this.game.canvas.height;
        this.draw_width = this.canvas.height*this.config.img_aspect;
        this.draw_height = this.canvas.height;
    }
    
    update(elapsed){
        if (this.game.state == 'playing') {
            this.x -= (elapsed * this.config.bg_speed);
            if (this.x + this.draw_width < 10) {
                this.x += this.draw_width;
            }
            this.drawBG(elapsed);
        }
    }
    
    drawBG(elapsed){
        this.clear();
    
        this.context.drawImage(
            this.img,
            this.x,
            0,
            this.draw_width,
            this.draw_height
        );
        if ((this.x - this.draw_width) < this.canvas.width) {
            this.context.drawImage(
                this.img,
                this.x + this.draw_width-1,
                0,
                this.draw_width,
                this.draw_height
            );    
        }
    }
    
    clear(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    
    reset(){
        this.clear();
    }
}

export default FlappyGameBG;