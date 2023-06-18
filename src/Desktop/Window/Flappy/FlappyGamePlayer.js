class FlappyGamePlayer{

    constructor(game){
        this.game = game;
        this.config = {
            /*
            images : {
                static: "/assets/img/flappy/unicat-cat-fly-3.svg",
                flying: "/assets/img/flappy/unicat-cat-fly-0.svg"
            },
            */
            images : {
                standard : [
                    "/assets/img/flappy/unicat-cat-fly-0.svg",
                    "/assets/img/flappy/unicat-cat-fly-1.svg",
                    "/assets/img/flappy/unicat-cat-fly-2.svg",
                    "/assets/img/flappy/unicat-cat-fly-3.svg",
                    "/assets/img/flappy/unicat-cat-fly-4.svg",                
                    "/assets/img/flappy/unicat-cat-fly-5.svg" ,                
                    "/assets/img/flappy/unicat-cat-fly-6.svg" ,                
                    "/assets/img/flappy/unicat-cat-fly-7.svg"  ,               
                    "/assets/img/flappy/unicat-cat-fly-8.svg"                 
                ],
                die : "/assets/img/flappy/unicat-cat-crash.svg",
                score : "/assets/img/flappy/unicat-cat-wink.svg"
            },
            image_frametimer: 50,
            size: {
                image_ratio: 1,
                height_percentage: .15
            },
            gravity: .0003,
            jump_speed: -.03,
            max_speed: .004,
            max_rotation: 4,
            rotation_speed: .01
        }
        this.image_standard_index =  this.get_max_standard_image() -1;
        this.last_fly = (new Date()).valueOf();
        this.dirty_fly = false;
        this.score_timer = null;

        this.create();
        this.startingPosition()
        this.current_image = "static";
        this.images = {};


        this.load();
    }

    get_max_standard_image(){
        return this.config.images.standard.length;
    }
    
    score(){
        this.set_display_type('score');
        this.score_timer = setTimeout(function(){
            this.set_display_type(null);
        }.bind(this),800);
    };
    
    set_display_type(override){
        clearTimeout(this.score_timer);
        this.override_image = override;
    }
    
    get_display_image(){
        if (this.override_image) {
            return this.images[this.override_image];
        }
        return this.images['standard-'+this.image_standard_index];
    };
    
    startingPosition(){
        this.current_position = {
            x: this.game.canvas.width / 2  - this.canvas.width / 2,
            y_percentage: .5
        }
        this.current_rotation = 0;
        this.current_speed = 0
    }
    
    create(){
        // Setup canvas
        this.canvas = document.createElement('canvas');
        this.determineSize();
        this.context = this.canvas.getContext("2d");
    }
    
    determineSize(){
        this.canvas.height = this.game.canvas.height * this.config.size.height_percentage * this.config.size.image_ratio;
        this.canvas.width = this.canvas.height;
        this.player_size = {
            width: this.canvas.width,
            height: this.canvas.width * this.config.size.image_ratio
        }
    }
    
    update(elapsed, timestamp){
        this.determineSize();
        if (this.dirty_fly) {
            this.dirty_fly = false;
            this.last_fly = timestamp;
        }
    
        var time_since = timestamp - this.last_fly;
    
        for (var ii=0; ii < this.get_max_standard_image(); ii++) {
            if (time_since < (ii * this.config.image_frametimer)) {
                this.image_standard_index = ii;
                break;
            }
            this.image_standard_index = this.get_max_standard_image() -1;
        }
    
        if(this.game.isPlaying()) {
            this.current_speed += Math.min(elapsed * this.config.gravity);
            this.current_rotation += Math.min(elapsed * this.config.rotation_speed);
            if(this.current_rotation > this.config.max_rotation) this.current_rotation = this.config.max_rotation;
            if(this.current_speed > this.config.max_speed){
                this.current_speed = this.config.max_speed;
            }
            if(this.current_position.y_percentage < 0) this.current_position.y_percentage = 0;
            if(this.current_position.y_percentage > 1) this.game.die();
            this.current_position.y_percentage += this.current_speed;
        }
        this.drawPlayer();
    }
    
    load(){
        var thisObj = this;
        for (var ii=1; ii < this.config.images.standard.length; ii++) {
            this.loadImg('standard-'+ii, this.config.images.standard[ii]);
        }
        this.loadImg('die', this.config.images.die);
        this.loadImg('score', this.config.images.score);
        this.loadImg('standard-0', this.config.images.standard[0]);
    
        /*
        this.loadImg("static", function(){
            thisObj.drawPlayer("static");
        });
        this.loadImg("flying");   
        */
    }
    
    loadImg(key, path, onload){
        this.images[key] = new Image();
        if(onload){
            this.images[key].onload = onload
        }
        this.images[key].src = path;    
    }
    
    drawPlayer(){
        this.clear();
    
        this.context.drawImage(
            this.get_display_image(),
            0,
            0,
            this.player_size.width,
            this.player_size.height
        );
    
        // this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
        // this.context.rotate(Math.PI / 180 * this.current_rotation);
        // this.context.restore();
    
        this.current_position.y = this.current_position.y_percentage  *  this.game.canvas.height - this.canvas.height / 2;
    /*
        this.game.context.drawImage(
            this.canvas,
            this.current_position.x,
            this.current_position.y
        );
    */
    
    
    }
    
    clear(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    
    fly(){
        var thisObj = this;
        this.current_rotation = -4
        this.current_speed = this.config.jump_speed;
    //    this.current_image = "flying";
        this.dirty_fly = true;
    
    //    this.last_fly = (new Date()).valueOf();
    /*
        if(this.fly_timeout) clearTimeout(this.fly_timeout);
        this.fly_timeout = setTimeout(function(){
            thisObj.current_image = "static";
        }, 400);
    */
    }
    
    reset(){
        this.override_image = null;
        this.startingPosition();
    }   
}

export default FlappyGamePlayer;