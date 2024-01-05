// let coffeeOrder = [
//     "alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - What ever is news"
// ];
        // console.log(coffeeOrder);
//      console.log(coffeeOrder[2]);  -  [2] -  using this inside an array allows us to target an index position remebering javascript runs 0 as item 1 so this will be charlie known as "zero index"
        // coffeeOrder[1] = "Ann - Vanilla latte";    
        // this allows to overwrite the poistion of ben for a new entry
       
        // console.log(coffeeOrder);

        // console.log(coffeeOrder.length)
        // this allows you count how many entrys we have as variables

        //PUSH/POP method adds the argument to the very end##### while pop removes
        // coffeeOrder.push("Donna - espresso")  //adds last item
        // console.log(coffeeOrder)   // prints last item to console
        // coffeeOrder.pop("Donna - espresso")  //removes last item to the list
        // console.log(coffeeOrder)  //prints last item to console

        // let favSongs = [
        //     "run to the hills",
        //     "enter sandman",
        //     "sweet child o mine"
        // ];

        // // console.log(favSongs);
        // favSongs.push("number of the beast")
        // favSongs.push("riders on the storm")
        // // console.log(favSongs)
        // favSongs.pop("riders of the storm")
        // console.log(favSongs)

//above adds a list of 3 var then displays to console, it then  uses the push to add to new vars to the list/array then console, now removes last entry point and final display to console
       
    //  console.log(favSongs.splice(1));
//splice seperates the var from the index position entererd within the () 

        // console.log(favSongs)

        // const persons = [
        //     {firstname : "Michael", lastname : "Gregory"},
        //     {firstname : "John", lastname : "Doe"},
        //     {firstname : "Ryan", lastname : "Barnett"}
        // ];

        // persons.map(getFullName);  //the map allows multiple var and strings to be grouped together as one var to be pulled for another use case (function)

        //     function getFullName(item) {
        //         return [item.firstname, item.lastname].join("");
        //     }

        //     console.log(persons)
//map allows you to create a function for a list and pull 2 var and make them into 1 var eg first name and last name, grabs bot h and displays botrh as one instance. but its not just 
//limited to strings it can be used for int and multiplied final outputs etc.



//     let coffeeOrder = [
//         "coffee",
//         "cortado",
//         "tea",
//         "Hot Choc",
//         "Water"
//     ]
// coffeeOrder[92]

//     for (let i = 0; i <coffeeOrder.length; i++) {
//         console.log(coffeeOrder[i]);
//     };


// let multiplesTwo = [];
// for (let i = 0; i < 20; i++) {
//     if (i  % 2 == 0){
//         multiplesTwo.push(i)
//     };
// };
// console.log(`Numbers in the 2 times table: ${multiplesTwo}`);


// let age = 15;    //while loops continue until the condition is met in this case start at 15 age++ adds 1 until 18 is met then change output
//     while( age < 18 ){

//         console.log("You're a child!");
//         age++; //adds the counter so it does not end up in an infinate loop
//     }

// console.log("You're an adult!");

// let cards = ["Clubs", "Diamonds", "Hearts", "Spades"];
// let currentCard = "Clubs";

// while (currentCard != "Spades"){
//     console.log(currentCard);
//     currentCard = cards[ Math.floor(Math.random()*4) ]
// };

// console.log(currentCard);

// let favFilm = ["gladiator", "ghostbusters", "walking dead", "shazam", "black Adam"];
// favFilm.push("destiny");
// favFilm.push("war of the worlds");
// let bestfilm = "shazam";

// while (bestfilm != "destiny"){
//         console.log(bestfilm);
//         bestfilm = favFilm[ Math.floor(Math.random()*favFilm.length) ]
// };
    
// console.log(bestfilm);