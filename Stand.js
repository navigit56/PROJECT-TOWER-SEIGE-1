
//creating Class STAND
class Stand{
    constructor(x,y,width,height){
        // OPTIONS
        var Options={
            isStatic:true,
            friction:0.1
        }

        this.Stand = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(this.Stand);

    }

    display(){
       var pos = this.Stand.position;
       var Angle= this.Stand.angle;

       push();
      Translate(this.Stand.position.x,this.Stand.position.y);
      rotate(Angle);
      rectMode(CENTER)
      rect(0,0,this.width,this,height);
      pop();



    }
}