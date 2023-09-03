import "./style.css";

let button = document.querySelector("button");
button.addEventListener("click", dotask);

let input=button.previousElementSibling;
input.addEventListener("keydown",(event)=>{
  if (event.key==="Enter") {
    dotask()
  }
})

function dotask(event) {
  let divtodos = button.nextElementSibling;
  let input = button.previousElementSibling;
  let ul = divtodos.firstElementChild;
/// max words
//maxWordResult.textContent = `Word with maximum length: ${maxWord}`;


  // todos
  input.value=input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()
  let todos = input.value.trim();
  
  // empty todos

  if (todos === "") {
  alert('you have to have a task')
    return;
  }

  // create li
  let li = document.createElement("li");
  li.classList="liclass"
  li.textContent = todos;
  let toupper=(todos)=>{todos[0].toUpperCase() + todos.slice(1).toLowerCase();}
  ul.append(li);

  //create delete button and span
  let btnupdate= document.createElement('button')
  let span = document.createElement("span");
  let deleteButton = document.createElement("button");
  let inputchecked =document.createElement("input")
  deleteButton.textContent = "X";
  span.classlist = "span";
  btnupdate.textContent="Update";
  inputchecked.type="checkbox";
  inputchecked.classList="check"
  span.append(inputchecked)
  span.append(btnupdate);
  span.append(deleteButton);
   li.append(span);


  

  deleteButton.onclick=(event)=>{
    deleteButton.parentElement.parentElement.remove();
  }
  //edit or update todo
  btnupdate.onclick=(event)=>{
    let existingTodo = event.target.parentElement.parentElement.firstChild.textContent;
    let newTodo = prompt('Enter new todo', existingTodo);
        // update li textContent
        if (newTodo===null) {
          newTodo= event.target.parentElement.parentElement.firstChild.textContent
        }
       event.target.parentElement.parentElement.firstChild.textContent = newTodo;
  }
//make fist word captital

// function capitalizerstLetter (event) {
//   return todos[0].toUpperCase() + todos.slice(1).toLowerCase();
// }
// console.log(capitalizerstLetter)


  //strike through when task complated
 inputchecked.onclick=(event)=>{
  if (event.target.checked) {
    event.target.parentElement.parentElement.classList.add("completed");
  } else {
    event.target.parentElement.parentElement.classList.remove("completed");
  }
}
  

  input.value = "";
}
















