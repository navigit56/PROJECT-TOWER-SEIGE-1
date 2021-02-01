    //create the class
    class Block{
        constructor(x,y,width,height){
            var options = {
                //putting on the physical values
                'restitution':0.8,
                'friction':1.0,

            }
    //creating our blocks(rectangles)....
            this.Visibility = 225;
                    this.Block = Bodies.rectangle(x,y,width,height,options);
                    World.add(this.Block);
    //defing the ptys.....
            this.width= width;
            this.height= height;
            
        }
    display(){
        if(this.Block.speed<3){
        //displaying the values
    var pos = this.Block.position;
    var angle = this.Block.angle;

    //giving the angle effect to the block(push,pop).........
    push();
    translate(this.Block.position.x, this.Block.position.y);
    rotate(angle);
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();

        } else{
            World.remove(world, this.Block);
        push();
        this.visibility = this.visibility-5;
        pop();
        }
    
    }
        
    }