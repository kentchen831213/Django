function hello(name){
  console.log("hello"+name);
}

function addNum(num1,num2) {
  console.log(num1+num2);
}

function helloSomeone(name="Frankie") {
  console.log("Hello"+name);
}

function formal(name="Sam", title="Sir"){
  // console.log(title+" "+name);
  return title+" "+name;
}

function timesFive(numInput) {
  var result = numInput*5
  return result
}

//global scope
var v = "Gllobal v"
var stuff = "global stuff"

function fun(stuff) {
  console.log(v);
  stuff = " reassign stuff inside func"
  console.log(stuff);
}

fun()
console.log(stuff);
