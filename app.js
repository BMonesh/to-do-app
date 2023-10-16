var todo_list = []
const input = document.getElementById("input");
const td_list = document.getElementById("todolist");

document.getElementById("button").addEventListener("click", whileClick);

function whileClick(){
  todo_list.push(input.value);
  // console.log(todo_list);
  input.value = "";
  show_tdlist();
}

function show_tdlist(){
  td_list.innerHTML = " ";
  todo_list.forEach(function (n, i) {
    td_list.innerHTML += "<li>" + n + 
    "<a onclick='edit(" + i +
    ")'>Edit</a>" + 
    "<a onclick='del(" + i 
    + ")'>&times | </a></li>"
  });
}

function del(i){
  todo_list.splice(i,1);
  show_tdlist();
}

function edit(i){
  var newInput = prompt("Please insert your new value");
  todo_list.splice(i, 1, newInput);
  show_tdlist();
}