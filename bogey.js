class BogeyClass{
constructor(x,y){
var options={
isStatic: false   
}
this.bogey_img=loadImage("images/coach.png");
this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50;
this.height=50;
World.add(world,this.body);
}
display(){
imageMode(CENTER);

var pos=this.body.position
image(this.bogey_img,pos.x,pos.y,this.width,this.height);
}

}