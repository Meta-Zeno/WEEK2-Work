// if (condition) {
//     //do th is
// }

// else if (condition2) {
//     //do this
// }

// else {
//     //if nothing ewlse matched do this
// }


// == means it does not care about data values its just equal to then === means its more solid stricts  how we strict compare values its just really spacific

// if(2 =="2"){
//     console.log("this is true")
// }
// else {
//     console.log("this is false")
// }

// if(2 ==="2"){
//     console.log("this is true")
// }
// else {
//     console.log("this is false")
// }


// == equal check if same 
// ===strict equal if ddata type are same
// != not equal 
// !==strict not equal

//MODULO
// if(10%2 === 0){
//     console.log("this is number is even")
// }
// else 
//     console.log("this number is odd")
// }


//  (expressiontobeevaluation    
//   logical operatio &&, !!
//   expression to be met)
//)
//  && both conditions to be met in order  to run code
//  || either condition can be met in order to run the code


//      if 
//     else if
//     else if
//     else if
//     else


//switch 

//if comparing int make sure to use booleans eg. true etc 

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//      console.log("Distinction");
//          break;

//     case grade >= 50:
//          console.log("Merit");
//          break;  

//     case grade >= 40:
//          console.log("Pass");
//          break;

//     default:
//        console.log("Failed");
// }


// ############################ ACTIVITY 1 #####################################
// let age = 18;
// let country = "UK";

// if (age >17 && country ==="UK") {
//     console.log("Yes i can serve you in this country.");
// }
// else{ 
//     console.log("Your not old enough")
// }


// ############################ ACTIVITY 2 #####################################


// let topping = "sausage";

// switch (topping) {

//     case "pepperoni":
//     case "cheese":
//     case "sausage":
//         console.log("These are important ingredients for my pizza.");
//         break;
    
//         case "pineapple":
//         case "peppers":
//             console.log("These should not be on my Pizza")
//         break;

//     default:
//         console.log(`I dont mind having ${topping} on my pizza`)
//         break;
// }

// ############################ ACTIVITY 3 #####################################

// let password = "Metallica";

// if (password.length <8) {
//     console.log("The password is too short, please create a longer password")
// }
// else{
//     console.log(`Passsword: ${password}`);
// }

// let num = 15;

// if (num % 3 === 0 || num % 5 === 0) {
//     console.log("this number is divisible by 3 or 5.");
// }
// else {
//     console.log("This number is not divbisible by 3 or 5");
// }


// ############################ ACTIVITY 4  FIZZ BUZZ #####################################

// let num = 9;

// if (num % 3 == 0 && num % 5 === 0) {
//     console.log("Fizz Buzz");
// }

// else if (num % 5 === 0) {
//     console.log("Buzz");
// }

// else if (num % 3 === 0) {
//     console.log("Fizz");
// }

// else {
//     console.log(num);
// }


// ############################ ACTIVITY 5 PALINDROME #####################################


// let num = "1271";
// let stringStatus = "is";

// for ( let i = 0; i < num.length / 2; i++){
//     if ( num[i] != num[num.length - 1 - i] ){        
//         stringStatus = "not"
//         break;
//     };
// };

// if (stringStatus == "not"){
//     console.log("It is not a palindrome");
// } else {
//     console.log("Is a palindrome.");
// };




// let num = 123321
//     function Palindrome(number) {
//         const numStr = number.toString();
//         const reversedStr = numStr.split('').reverse().join('');
//         return numStr === reversedStr        
//     }

// if (Palindrome(num)) {
//     console.log(`${num} is a palindome.`);
//     }
// else {
//     console.log(`${num} is not a palindrom.`);
// }



// ############################ ACTIVITY 6  #####################################



// let time = 7;
// let placeOfWork = "Office";
// let townOfHome = "Home";

// if (time <7) {
//     console.log(`At ${time}: I'm sleeping at ${townOfHome}`);
// }

// else if (time <8) {
//     console.log(`At${time}: I am getting up and getting ready at ${townOfHome}`);
// }

// else if (time <9) {
//     console.log(`At ${time}: I am commuting to the ${placeOfWork}`);
// }
// else {
//     console.log(`At ${time}: I am at ${placeOfWork}`);
// }


// ############################ ACTIVITY 7  #####################################

// const inputString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".toLowerCase();
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let lastIndex = -1;

// for (let index = inputString.length - 1; index >= 0; index--) {
//     if (vowels.includes(inputString[index])) {
//         lastIndex = index;
//         break;
//     }
// }

// console.log("Index of the last vowel:", lastIndex);


// ############################ ACTIVITY 7  #####################################

// const longstring = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// const vowels = ['a','e','i','o','u'];
// const finalIndex = longstring.split('').reverse().findIndex(char => vowels.includes(char));

//     if (finalIndex !== -1) {
//         const originalIndex = longstring.length - 1 - finalIndex;
//             console.log ("Index of the last vowel" , originalIndex)
//     }
//     else {
//             console.log("No Vowel found in this string provided")
//     }




// ############################ ACTIVITY 8  #####################################


// let word = "testword";

// if (word.length > 1) {
//     if (word[0] === word[word.length - 1]) {
//         console.log("The first and last letters are the same!");
//     } else {
//         console.log("The first and last letters are different.");
//     }
// } else {
//     console.log("The word is too short to check.");
// }


// ############################ ACTIVITY 9  #####################################

// let num1 = 6;
// let num2 = 3;

// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log("The sum is even: " + sum);
// } else {
//     console.log("The Sum is odd, multiply them!: " + (num1 * num2));
// }












