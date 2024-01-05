//DRY dont repeat yourself
// => arrow function       
// const pressGrindbeans = () => {
//     console.log("Grinding for 20 seconds")
// };

// pressGrindbeans();

// const favColour = () => {
//     console.log("My Favorite colour is Blue");
// };

// favColour();


// let coffeeIsGrinding = false;

// const pressGrindbeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }

// }

// pressGrindbeans();

// let accnumber = 50449921;

// const cashWithdrawl = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account: ${accnum}`);
// }

// cashWithdrawl(300, accnumber);
// cashWithdrawl(30, 50449921);
// cashWithdrawl(200, 50447921);
// cashWithdrawl(20, 50447921);

// let colour = "blue";

// const favColour = (Blue) => {
//     console.log(`My Favorite colour is ${favColour}`);
// };

// favColor(colour);



// let color = "Yellow"

// const favColor = (color) => {
//     console.log(`My favorite color is ${color}.`)
// }

// favColor(color)


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(12,20));
// console.log(addUp(7,103));
// console.log(addUp(2,5));

// ACTIVITY  1

// const factorial = (n) => {
//     if ((n ===0)  ||  (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

//ACTIVITY  2

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Order number: ${orderCount} - Pizza with ${topping1} and ${topping2}.`)
//     orderCount++;
//     return orderCount;
// }

// takeOrder("Pepperoni", "Onions")
// takeOrder("ham", "cheese")

// ACTIVITY 3


let accountBalance = 300; 
const correctPin = 1987; 

const cashMachine = (enteredPin, requestedAmount) => {
  console.log("Hello and welcome to your bank");

  if (enteredPin === correctPin) {
    console.log("PIN is OK, getting you're account");

    if (requestedAmount > 0 && requestedAmount <= accountBalance) {
      console.log(`Successful. Dispensing $${requestedAmount}.`);
      accountBalance -= requestedAmount;
      console.log(`balance: $${accountBalance}`);
      console.log("thanks for using the bank");
    } else {
      console.log("Not Enough funds.");
      console.log("Transaction failed. Please try again.");
    }
  } else {
    console.log("Incorrect PIN. Access denied.");
  }
};

cashMachine(1987, 200);