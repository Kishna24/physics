class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}

        }

        this.launcher = Constraint.create(options)
        World.add(world.this.launcher)
    }

    display(){
        var pointA = this.launcher.bodyA.position
        var pointB = this.launcher.bodyB.position

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}