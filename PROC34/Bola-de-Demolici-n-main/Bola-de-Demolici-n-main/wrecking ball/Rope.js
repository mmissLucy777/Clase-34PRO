class Rope{
  constructor(bodyA, pointB){
    var options = {bodyA: bodyA, pointB: pointB, stiffness: 1.2, length: 250}
    this.pointB = pointB;
    this.body = Constraint.create(options);

    World.add(world, this.body);

  }

  attach(){
    this.body.bodyA = body;
  }

  fly(){
    this.body.bodyA = null;
  }
  display(){
    if(this.body.bodyA){
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;

      push();
      strokeWeight(4);
      stroke("black");
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
    }

  }
}