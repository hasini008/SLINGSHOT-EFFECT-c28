class Chain {
 constructor( body1 , body2 ){

     var chain_props={
    stiffness:0,
    length:50,
    bodyA: body1,
    bodyB: body2
     }

     this.Chain = Matter.Constraint.create(chain_props);
     World.add(world , this.Chain);

 }

  display(){
  
  line(this.Chain.bodyA.position.x , this.Chain.bodyA.position.y , this.Chain.bodyB.position.x , this.Chain.bodyB.position.y);

  }

}