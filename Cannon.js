class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canonbase = loadImage("assests/cannonBase.png");
    this.canontop = loadImage("assests/canon.png");
  }
  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.canontop,0,0,this.width,this.height)
    pop()
    image(this.canonbase,70,20,200,200);
    noFill();
  }
  
}
