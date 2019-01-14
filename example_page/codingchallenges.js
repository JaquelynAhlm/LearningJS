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
 * (using if/else if/else. &&)
 */

console.log("Liitle puppy Gizmo eats from the magical wizard's trash can.")
var gizmoLuck = 17 // Roll D20
 
if (gizmoLuck <= 5) {
    console.log("He starts to glow bright red")
} else if (gizmoLuck > 5 && gizmoLuck <= 10) {
    console.log("He starts to smell of fresh lavender and vanilla")
} else if (gizmoLuck > 10 && gizmoLuck <= 15) {
    console.log("Instantly, he is transported to a dimesion where everything is made of goo.")
} else {
    console.log("He feels a bit funny. When he looks in the mirror, he sees a cow.")
}

if (gizmoLuck <=9) {
    console.log("Sadly, he explodes in a ball of fire two minutes later")
} else {
    console.log("He must now live with the consequences!")
}

/*******
 * Third Coding Challenge : Tip calculations?
 * 
 */

function getTipPercent(bill) {
    
    if (bill < 50) {
        tipPerBill.push(0.2 * bill)
        totalPerBill.push(0.2 * bill + bill)
    } else if (bill >= 50 && bill <= 200) {
       tipPerBill.push(0.15 * bill)
       totalPerBill.push(0.15 * bill + bill)
    } else {
       tipPerBill.push(0.1 * bill)
       totalPerBill.push(0.1 * bill + bill)
    }
}

var restaurantBills = [124, 48, 268]
var tipPerBill = []
var totalPerBill = []

// passing into function getTipPercent, or running the function for each bill
getTipPercent(restaurantBills[0])
getTipPercent(restaurantBills[1])
getTipPercent(restaurantBills[2])
// console returns [object Array]: [18.599999999999998, 9.600000000000001, 26.8] tipPerBill
// console returns [object Array]: [142.6, 57.6, 294.8] totalPerBill

console.log("If John wants a tip calculator, he should probably know how to build something to input the bill amounts!")
