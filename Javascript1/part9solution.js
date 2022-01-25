var first = prompt("Please enter your firstname");
var last = prompt("Please enter your lastname");
var age = prompt("Please enter your age");
var height = prompt("Please enter your height");
var pet = prompt("Please enter your pet names");

var length = pet.length

if ((first[0] === last[0]) && (20<age<30) && (height>=170) && (pet[length-1] == "y")) {
  console.log(" You can read the message!");
}else {
  console.log("sorry, there is no message for you");
}
