

// console.log("Hello Wolrd")
// console.log(     "Hello Wolrd".length       )
// console.log(     "Hello Wolrd".toUpperCase()       )

// console.log(   Math.random()     );  -------- this gives us numbers between 0 and 1

// console.log(   Math.random() *10 );       -------this gives us a range between 0 - 10
// console.log(   Math.floor( Math.random() * 10 ) );     ---- will never be 10 exactly  so true range is 0-9 returnbs an integet less than or equal to 
// console.log(   Math.ceil( Math.random() * 10 ) );    ----will never be true 0 its 1-10   imagine using a dice  * 6 would be 1-6   will allways round a number up 
// console.log(   Math.round( Math.random() * 10 ) );    ----this allows for 0-10  


// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")

// const board = [
//     ['   ', '   ', '   '],
//     ['   ', '   ', '   '],
//     ['   ', '   ', '   ']
//   ];
  
//   // Function to display the tic-tac-toe board
//   function displayBoard() {
//     for (let i = 0; i < 3; i++) {
//       // Display a row
//       console.log(board[i].join('|'));
      
//       // Display a separator after each row, except the last one
//       if (i < 2) {
//         console.log('---|---|---');
//       }
//     }
//   }
  
//   // Display the initial board
//   displayBoard();


// const board = [
//     ['   ', '   ', '   '],
//     ['   ', '   ', '   '],
//     ['   ', '   ', '   ']
//   ];
  
//   function displayBoard() {
//     console.log(board.map(row => row.join('|')).join('\n---|---|---\n'));
//   }
  
//   function insertPlay(row, col, playerSymbol) {
//     if (board[row][col] === '   ') {
//       board[row][col] = ` ${playerSymbol} `;
//       return true;
//     } else {
//       console.log('Invalid move. Cell already occupied.');
//       return false;
//     }
//   }
  
//   displayBoard();
//   insertPlay(0, 1, 'X');
//   displayBoard();

//   // Player X makes a move
// insertPlay(0, 1, 'X');
// displayBoard();

// // Player O makes a move
// insertPlay(1, 1, 'O');
// displayBoard();

// // Player X makes another move
// insertPlay(2, 2, 'X');
// displayBoard();

// // Player O makes another move
// insertPlay(1, 0, 'O');
// displayBoard();


// // Player X makes yet another move
// insertPlay(2, 0, 'X');
// displayBoard();

// #############################################################

// //      \n =  new line
// console.log("   |   |   \n   |   |   \n")     


// // This can be used over a few lines and use it based on formating back t icks are the most veristile  
// console.log(`
// Hello 
//     Im Mike
//         Goodbye
// `)


// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")



// const verticalGrid = "   |   |   ";

//  const horizontalGrid = "------------";

//  function printTable() {

// console.log(verticalGrid);
// console.log(verticalGrid);
// console.log(verticalGrid);

// console.log(horizontalGrid);

// console.log(verticalGrid);
// console.log(verticalGrid);
// console.log(verticalGrid);

// console.log(horizontalGrid);

// console.log(verticalGrid);
// console.log(verticalGrid);
// console.log(verticalGrid);

// }
// printTable(console.log)

// console.log("All Around the World".charAt(7).toLocaleUpperCase()) 
// console.log("All Around the World".split(" ")) #######this is an array and split the words with a space between each word

// ####################################VARIABLES#####################################################

// let - used for declaring a value that CAN be changed
// const - cant change it throughout the java
// var is more let can declare a variable [but its being phased out]

// let i - 10;
//     const i = 10;
//         var i =  10;

// let myName = "John"

// console.log(myName)

// let number = 10

// number++

// console.log(number )

// let i = 10;

// i = i+ 2;
//i = 12


// ##########################################################################

// let favoriteDrink = "coffee";

// console.log ("My Favorite Drink is " + favoriteDrink);
// ########################################################################


//let myname = "Mike";

// console.log(`My name is ${myname}`)



// name age color then update t hem

// eat breakfast  dfinner lunch program that caluclates the number fo days to my birthday   javascripte date on mdn


// ########################################ACTIVITY1######################################
// let myName = "Mike;"
// let myAge = 36
// let myFavColor = "Blue"

// console.log(`My name is ${myName}, my age is ${myAge}, and my favorite colour is ${myFavColor}` )

// console.log("")

// myAge = 42;
// myFavColor = "Green";

// console.log(`My name is ${myName}, my age is ${myAge}, and my favorite colour is ${myFavColor}` )


// ######################################ACTIVITY 2 #######################################

// let day1 = "Monday"

// let breakfast = "Eggs and Toast"
// let Dinner = "chicken and rice"
// let Tea = "Take away"

// console.log(` On ${day1},  i had for breakfast ${breakfast}, for  dinner i had ${Dinner}, and for tea i had ${Tea}`)

// console.log("")
//     day2 = "Tuesday"

//     breakfast = "Ommlette"
//     Dinner = "Soup and Noodlesa"
//     Tea = "Lazagne"

//     console.log(`on ${day2}, I had for breakfast ${breakfast}, i had  ${Dinner} and i had ${Tea} for Tea.`)

// console.log("")


// ######################################aCTIVITY 3 #######################################


// year = 365
// days_until = 177

// console.log(year - days_until)


// ########################################################################################

// Set your birthday (month is 0-based, so January is 0 and December is 11)

// const birthdayMonth = 6;// Replace with your birth month
// const birthdayDay = 8; // Replace with your birth day



// // Get the current date
// const currentDate = new Date();

// // Get the current year
// const currentYear = currentDate.getFullYear();

// // Set the next birthday
// const nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);

// // Check if the birthday has already occurred this year
// if (currentDate > nextBirthday) {
//   nextBirthday.setFullYear(currentYear + 1); // Set to next year
// }

// // Calculate the difference in days
// const daysLeft = Math.ceil((nextBirthday - currentDate) / (24 * 60 * 60 * 1000));
// console.log(`There are ${daysLeft} days left until your next birthday!`);


// ######################################aCTIVITY 4 #######################################

// space1 = ("0") 
// space2 = ("X") 
// space3 = ("0") 
// space4 = ("X") 
// space5 = ("0") 
// space6 = ("X") 
// space7 = ("0") 
// space8 = ("X") 
// space9 = ("0") 


// console.log(`    |     |     `)
// console.log(`  ${space1} |  ${space3}  |  ${space2}  `)
// console.log(`    |     |    `)
// console.log(`-----------------`)
// console.log(`    |     |     `)
// console.log(`  ${space5} |  ${space4}  |  ${space6}  `)
// console.log(`    |     |    `)
// console.log(`-----------------`)
// console.log(`    |     |     `)
// console.log(`  ${space7} |  ${space8}  |  ${space9}  `)
// console.log(`    |     |    `)


// ---------------------------------------------------------------------------------------------

// console.log("");



// space1 = ("0")

// space2 = ("X")



// console.log(`    |     |     `)

// console.log(`  ${space1} |  ${space1}  |  ${space2}  `)

// console.log(`    |     |    `)

// console.log(`-----------------`)

// console.log(`    |     |     `)

// console.log(`  ${space2} |  ${space1}  |  ${space2}  `)

// console.log(`    |     |    `)

// console.log(`-----------------`)

// console.log(`    |     |     `)

// console.log(`  ${space1} |  ${space1}  |  ${space1}  `)

// console.log(`    |     |    `)



// console.log("");
