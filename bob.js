class Bob {
    constructor(x, y)  {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, 20, options); 
        this.radius = 20;
        World.add (world, this.body);
    }
    display()
    {

        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyA.position;
        
        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.x+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
}