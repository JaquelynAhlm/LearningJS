/*******************************************
 *FIRST CODING CHALLENGE

var markMass = 35
var johnMass = 80
var markH = 1.5
var johnH = 1.8

var markBMI = markMass / (markH * markH)
var johnBMI = johnMass / (johnH * johnH)

console.log("Is Mark's BMI higher than John's?" + (markBMI > johnBMI));
*/

/************************************
 * MY OWN SECOND CHALLENGE
 * (using if/else if/else)
 */

 console.log("Liitle puppy Gizmo eats from the magical wizard's trash can.")
 var gizmoLuck = 5 // Roll D20
 
 if (gizmoLuck <= 5) {console.log(  "He starts to glow bright red")} 
 else if (gizmoLuck > 5 && gizmoLuck <= 10) {console.log("He starts to smell of fresh lavender and vanilla")}
 else if (gizmoLuck > 10 && gizmoLuck <= 15) {console.log("Instantly, he is transported to a dimesion where everything is made of goo.")}
else {console.log("He feels a bit funny, and when he looks in the mirror he sees a cow.")}

if (gizmoLuck <=9) {console.log("Sadly, he explodes in a ball of fire two minutes later")}
else {console.log("He must now live with the consequences!")}