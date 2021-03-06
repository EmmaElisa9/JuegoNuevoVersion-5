class Alien{
    constructor(x,y,w,h){

        var options = {
            isStatic : false
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body)
        this.image = loadImage("alien1.gif")
        this.image2= loadImage ("Alien2.gif");
        this.image3= loadImage ("alienQ0.png");

    }

    move(x,y){
        //this.body.position.x = this.body.position.x + x; 
        //this.body.position.y = this.body.position.y+y; 
        //Matter.Body.applyForce(this.body, {x:x,y:y})
        Matter.Body.setPosition(this.body,{x:this.body.position.x+x, y:this.body.position.y+y});
    }

    display(){
        push ();
        translate(this.body.position.x, this.body.position.y);
        //rotate(this.body.angle);
        imageMode(CENTER);
        if(keyDown("RIGHT_ARROW")){
            image(this.image,0,0,this.w,this.h);
        }
        else if(keyDown("LEFT_ARROW")){
            image(this.image2,0,0,this.w,this.h);
        }
        else{
            image(this.image3,0,0,this.w,this.h);
        }
        pop ();
    }
  }