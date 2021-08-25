/*
class rope{
  constructor(body1,point1x,point2y){

    this.point1x = point1x
    this.point2y = point2y
      this.body1 = body1

    var con = Matter.Constraint.create({
	   pointA:{x:this.point1x,y:this.point2y},
	   bodyB:body1,
	   pointB:{x:0,y:0},
	   length:100,
	   stiffness:0.1
	})

    World.add(world,con);
  }
  
  display(){
    var pB = this.body1.position
    
    strokeWeight(2);
    stroke("white");
    line(this.point1x,this.point2y,pB.x,pB.y);   
  }
}
*/