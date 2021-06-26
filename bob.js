class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
           }
           this.x=x
           this.y=y
           this.radius=radius
           this.body=Bodies.circle(this.x,this.y,this.radius)
           this.color=color(255,255,255)

    }


    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};