/*********************************************************************************************
 *FIRST CODING CHALLENGE

var markMass = 35
var johnMass = 80
var markH = 1.5
var johnH = 1.8

var markBMI = markMass / (markH * markH)
var johnBMI = johnMass / (johnH * johnH)

console.log("Is Mark's BMI higher than John's?" + (markBMI > johnBMI));
*/

/************************************************************************************************
 * MY OWN SECOND CHALLENGE
 * (using if/else if/else. &&)
 */

console.log("Liitle puppy Gizmo eats from the magical wizard's trash can.")
var gizmoLuck = 17 // Roll D20, since I don't know how to generate a random number yet
 
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

/*******************************************************************************************
 * Third Coding Challenge : Tip calculations?
 * 
 */
/*
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
*/

console.log("If John wants a tip calculator, he should probably know how to build something to input the bill amounts!")

/*******************************************************************************************
 * Fourth Coding Challenge : Objects and Methods
 */

 // If I was doing this for real, pretty sure I would want BMI as a function and not a method
// attached to each object, which is already breaking the rule : not to repeat yoursself.
/*
 var john = {
     firstNAme: 'John',
     lastName: 'Smith',
     height: 1.8,
     mass: 80,

     calcJohnBMI: function() {
       this.johnBMI = this.mass / (this.height * this.height) 
         return this.johnBMI
     }
 }

 var mark = {
     firstNAme: 'Mark',
     lastName: 'Dingus',
    height: 1.5,
    mass: 35,

    calcMarkBMI: function() {
       this.mark = this.markthis.mass / (this.height * this.height) 
       return this.markBMI
    }
 }
 
 john.calcJohnBMI()
 mark.calcMarkBMI()

if (john.johnBMI > mark.markBMI) {
     console.log("John's BMI is greater than Mark's.")
} else if (johnBMI < markBMI) {
    console.log("Mark's BMI is greater than John's.")
} else {
    console.log("John and Mark's BMI are the same")
}
*/

/**********************************************************************************************
 * Fifth coding challenge: Loops and more objects
 */


var john = {
    fullNAme: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function(billAmount) {
        if (billAmount < 50) {
            this.tipPerBill.push(0.2 * billAmount)
            this.totalPerBill.push(0.2 * billAmount + billAmount)
        } else if (billAmount >= 50 && billAmount < 200) {
           this.tipPerBill.push(0.15 * billAmount)
           this.totalPerBill.push(0.15 * billAmount + billAmount)
        } else {
           this.tipPerBill.push(0.1 * billAmount)
           this.totalPerBill.push(0.1 * billAmount + billAmount)
        }
    },
    tipPerBill: [],
    totalPerBill: [],
}

for (var i = 0; i < john.bills.length; i++) {
    john.tipCalculator(john.bills[i]);
}

console.log(john);

/***
 * Here is the teacher's solution, which is probably better than mine(at least simpler):
 * 
 * var john = {
    fullNAme: 'John Smith',
    bill: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50  && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + bill * percentage;
        }
    }

    john.calcTips();
    console.log(john);

 */
