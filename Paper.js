class Paper {
    constructor(x, y, r) {

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(x, y, r,options );
        this.r=r
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        fill(255,0,250)
        imageMode(CENTER)
       
        image (  this.image,0,0, this.r,this.r);
        pop();
      }
}                               