class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        //this.sling1 = loadImage('sprites/sling1.png');
       
        this.chain= Constraint.create(options);
        World.add(myWorld, this.chain);
    }
   
   show(){
        //image(this.sling1,200,20);
        
     
            var posA = this.chain.bodyA.position;
            var posB = this.chain.bodyB.position;
           stroke(0);
                strokeWeight(5);
                line(posA.x , posA.y, posB.x , posB.y);
               
    }
    
}