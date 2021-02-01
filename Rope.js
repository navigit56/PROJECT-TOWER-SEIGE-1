
//creating Sling class

class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        
        this.Rope = Constraint.create(options);
        this.pointB= pointB;
        World.add(this.Rope);
    }
    
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var bodyB = this.bodyB;

            push();
            strokeWeight(4);
            stroke("pink");

           //we are drawing a line from POINT A and ending in BodyB
           line(pointA.x, pointA.y, bodyB.x, bodyB.y);
            pop();
        }
    }
    
}