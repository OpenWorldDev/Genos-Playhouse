class Rope {
 constructor (bodya,bodyb){
 var options = {
 bodyA: bodya, bodyB: bodyb, length: 50, stiffness: 0.05
 }

this.rope = Matter.Constraint.create (options)
World.add (world, this.rope)
 }
 show(){

    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y)
 }
}