class Rock{
constructor(x,y){
this.rock_img=loadImage("images/rock1.png")

this.body=Bodies.rectangle(x,y,50,50);
this.width=50;
this.height=50;
World.add(world,this.body);
}
display(){
imageMode(CENTER);
var pos=this.body.position;
image(this.rock_img,pos.x,pos.y,this.width,this.height);
}
}