class Ball {
    constructor(x, y,r) {

        var options ={
            isStatic:true,
            restitution:1
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image=loadImage("ballimg.png");
        this.i=loadImage("ballimg.png");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

       // pos.x=mouseX;
        //pos.y=mouseY;

       // push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(RADIUS);
        noStroke();
        image(this.image,pos.x,pos.y);
        image(this.i,pos.x,pos.y);
        //pop();

    }

};