class Chain {
 constructor( body1 , point2 ){

     var chain_props={
    stiffness:0.05,
    length:10,
    bodyA: body1,
    pointB: point2
     }

     this.Chain = Matter.Constraint.create(chain_props);
     World.add(world , this.Chain);

 }

  display(){
  if(this.Chain.bodyA){

    line(this.Chain.bodyA.position.x , this.Chain.bodyA.position.y , this.Chain.pointB.x , this.Chain.pointB.y);

  }
  //line(this.Chain.bodyA.position.x , this.Chain.bodyA.position.y , this.Chain.pointB.x , this.Chain.pointB.y);

  }

    chainBreak() {

        this.Chain.bodyA = null;

    }
}