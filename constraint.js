class ConstraintClass{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:10
}
this.constraint=Constraint.create(options);
World.add(world,this.constraint);
}
display(){
var pos1=this.constraint.bodyA.position;
var pos2=this.constraint.bodyB.position;

strokeWeight(5);
line(pos1.x,pos1.y,pos2.x,pos2.y);
}
}