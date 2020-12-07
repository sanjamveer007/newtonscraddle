class Rope{

constructor(body1,body2,xoffset){

var options= {
stiffness:1,
bodyA: body1,
bodyB: body2,
pointB: {x:xoffset,y:0}                           
}

this.rope = Constraint.create(options)
this.xoffset = xoffset;
World.add(world,this.rope)

}

display(){
strokeWeight(3)
stroke("white")
var posA = this.rope.bodyA.position;
var posB = this.rope.bodyB.position;

line(posA.x , posA.y, posB.x+this.xoffset, posB.y)
}
}