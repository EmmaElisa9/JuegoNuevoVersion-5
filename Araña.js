class Araña{
    constructor(pointA,pointB,pointBa){

        this.pointB = pointB;
        this.pointA = pointA;
        this.pointBa = pointBa;

        this.body = Bodies.circle(this.pointA,this.pointB+40,50,70);
        this.image = loadImage("spider0.png");

        World.add(world, this.body);
    }

    mover(B){
        this.pointB=this.pointB+B;
    }

    display(){
            push();
                imageMode(CENTER);
                image(this.image,this.pointA,this.pointB+40,50,70);
                strokeWeight(4);
                stroke("white");
                line(this.pointA,this.pointBa,this.pointA,this.pointB+30);
            pop();
    }
    
}