class Roof{
  constructor(){
    var option = {isStatic:true};
    this.body = Bodies.rectangle(400,190,200,20,option);
    World.add(world,this.body);
  }
display(){

var pos = this.body.position;
rectMode(CENTER);
fill("orange");
rect(pos.x,pos.y,200,20);

}
}