const person = {
  fName : "John",
  lName: "Doe",

}
person.fName = "Quest";
person.age = 90;
console.log(person)
const number = [2, 5,34,55, 56,32,6];
number.push(4);
console.log(number)

let val;
val = 90;
console.log(val);
val = ["boys", "girls"];
console.log(val);


let myVal;
myVal = "This is a text";
myVal = 999;
console.log(myVal)

myVal = [2,4,6, 22];
 myVal.pop();


console.log( myVal)

//creating a blackjack game
let cardDeck, player1, player2;
cardDeck = [
  "Ace",
  "Queen",
  "Two of Spades",
  "Three of Spades"
]
player1 = [ cardDeck[2], cardDeck[1]]
player2 = [cardDeck[0], cardDeck[2]];
console.log("PLAYER 1: " +  player1)
console.log("PLAYER 2: " +  player2)

const myNum33 = 5;
if(myNum33 >= 9){
  console.log("Yes")

}else {
  console.log("no")
}
let country = "USA", Nation = "NG"
    state = "LA";
    if(country !== "USA" || Nation == "NG" ){
      state = "Ogun"
    }
    console.log(state )
let  score = 2000;
if(score < 1000){
  score+= 200;
} else {
  console.log("No bonus")
}
console.log("Your score: " + score);

//Switch
const user = "Mary";
switch(user){
  case "Joe":
    console.log("John");
    break;
  case "Pete":
    console.log("Pete");
    break;
  case "Mary":
    console.log("Hey Mary!");
    break;
    default:
      console.log("sorry")
}
console.log(user)

//for() Loop
for(let i = 0; i <= 10; i++){
  console.log(i)
}
// let sch = ["Lag" , "OAU", "UI"]
// for(i = 0; i.length; i++){
//   console.log(sch[i])
// }

//while() Loop
// let count = 5;
// while(count < 10){
//   console.log
// }

//Number
const myCount1 = 5;
const myCount2 = (9).toString();
console.log(Number(myCount1)
