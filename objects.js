// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe:() => {
//         return "come on in";
//     },
//     closeCafe:() => {
//         return "we are closed, come back tomorrow!"
//     }

// // ############### These two are the sam  but as of ES6 their is no need to use => and the :  on cafe
//     openCafe(){
//         return "come on in";
//     },
//     closeCafe(){
//         return "we are closed, come back tomorrow!"
//     }


// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// ##########################################################################################################################################


// ES6 VERSION############################


// openCafe(){
//     if(this.hasSpecialOffers){
//         return "Time for a special offer";
//     }
// },
// closeCafe(){
//     return "we are close";
// }
// };

// console.log(cafe.openCafe());



// console.log(cafe.drinks[2]);  //calls the array index position as 3rd position due to zero index
// console.log(cafe["breakfastOffer"]); //calls outside of the array and grabs data under 

// ABOVE OR BELOW  THIS IS AUTOMATION #############################


// if (time<1100){
//     offer = cafe.breakfastOffer;
//     // console.log(cafe.breakfastOffer);
// } else if (time <1500){
//     offer = cafe.lunchOffer;
//     // console.log(cafe.lunchOffer);
// }

// console.log(offer);   //refactor the console.log this  means just add it at the end and no need to re write it 


// ##########################################################################################################################################
//     let person = {
//         name: "Mike",
//         age: 36, 
//         favSongs: [
//             "song1",
//             "song2",
//             "song3",
//             "song4",
//             "song5"
//            ],
// };

// console.log(person.name);   // using .name after person tagerts the name value
// console.log(person["favSongs"]);  // used  [] due to it being an array
// console.log(person["Mike"]); //can use variables to select keys of an object



// ##############   ACTIVITY  ######################

let day = "Sunday";
let message = "";

let alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
};

if (day === "Saturday" || day === "Sunday"){
    message = alarm.weekendAlarm;
} else {
    message = alarm.weekdayAlarm;
};

console.log(message);
// ################################# ACTIVITY 1 ##############################

    const person = {
        myName: "Mike",
        age: 36, 
        favSongs: [
            "song1",
            "song2",
            "song3",
            "song4",
            "song5"
           ],

        sayHI(){
            console.log(`hello my name is ${this.myName}, and my favorite song is ${this.favSongs[2]}`)
        }
};

person.sayHI()
// ################################# ACTIVITY 2 ##############################

const pet = {
    name: "rex",
    typeOfPet: "german shep",
    age: 2,
    colour: "suntan",
    eat() {
        console.log(`my pet ${this.name}, is eating and it is ${this.colour}`);
    },

    drink() {
         console.log(`my pet ${this.name}, is drinking`);
    }

};

pet.eat()


// ################################# ACTIVITY 3 ##############################

// const coffeeShop = {
//     branch: "Wigan",
//     drinks: {
//         "americano": 2.90,
//         "latte": 3.70,
//         "tea": 2.00,
//         "coffee": 1.50, 
//     },
    
//     // food: {
//     //     pizza: 7.00,
//     //     chips: 3.20,
//     //     fish: 4.90,
//     //     hotdog: 2.50,
//     // },

//     drinksOrdered(drink){
//         if (this.drinks[drink]){
//           console.log(`${this.drinks[drink]} ${drinks} ordered`);
//         //   return this.drinks[drink] * amount;
//         } else {
//             console.log(`${drink} is out of stock`);
//             // return 0;
//         };
//     },
     
// coffeeShop.drinksOrdered()

// }

// // console.log(coffeeShop.drinksOrdered())

// #######################################################################################



const coffeeShop = {
    
}








