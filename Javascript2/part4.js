
var list = []

function add(name){
  list.push(name);
}

function remove(name){
  var index = list.indexOf(name)
  list.splice(index,1);
}

function display(){
  console.log(list);
}


while (true){
  input = prompt("Please input add,remove,display, or quite")

  switch (input){
    case "add":
      name = prompt("Please input add name");
      add(name);
      break;
    case "remove":
      name = prompt("Please input remove name");
      remove(name);
      break;
    case "display":
      display();
      break;
    case "quite":
      break;
    default:
      alert("Not recognize, will break");
      input = quite;
  }
  if (input === "quite"){
    break;
  }else{
    continue;
  }
}
