class Paper{

constructor(x,y){
     var options ={
     restitution:0.3,
     friction:0.5,
     density:0.14

    }
    
   
    this.body = Bodies.circle(x,y,70,options);
    this.image = loadImage("paper.png");
    this.image.scale = 0.5
    this.radius = 20;
    World.add(world,this.body);
}

    display(){

      var paperpos=this.body.position

      push();
      translate(paperpos.x,paperpos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      fill("white");
      pop();

    }







}
