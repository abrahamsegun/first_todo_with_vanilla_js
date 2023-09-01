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

  //strike through when task complated
 inputchecked.onclick=(event)=>{
  if (event.target.checked) {
    event.target.parentElement.parentElement.classList.add("completed");
  } else {
    event.target.parentElement.parentElement.classList.remove("completed");
  }
}
  // li.onclick=(e)=>{
  //   e.target.todos.classlist.toggle("completed")
  // }

  input.value = "";
}

















// const button = document.querySelector('button');
// const input = document.querySelector('input');
// //

// button.addEventListener('click', createTodo);

// input.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     // create todo only if input is not empty
//     createTodo();
//   }
// });

// function createTodo(event) {
//   let input = button.previousElementSibling;
//   let divTodo = button.nextElementSibling;
//   let ul = divTodo.firstElementChild;
//   // console.log(ul);
//   const todo = input.value.trim();

//   // create li
//   let li = document.createElement('li');
//   // set textContent
//   if (todo == '') {
//     alert('You have to enter a task')
//     return;
//   }

//   li.textContent = todo;

//   // single click on the line mean todo is done
//   li.onclick = (event) => {
//     event.target.classList.toggle('completed');
//   };

//   // double click on the line mean edit todo
//   li.ondblclick = (event) => {
//     // get the existing textContent of li
//     let existingTodo = event.target.firstChild.textContent;
//     // prompt user to enter new todo
//     let newTodo = prompt('Enter new todo', existingTodo);
//     // update li textContent
//     event.target.firstChild.textContent = newTodo;
//   }

//   // add a delete button
//   let deleteButton = document.createElement('button');
//   deleteButton.textContent = 'X';
//   // add onclick event to button
//   deleteButton.onclick = (event) => {
//     // remove li
//     let deleteTodoConfirmed = confirm('do you want to remove todo?!');
//     if (deleteTodoConfirmed) {
//       let thisDeleteButton = event.target;
//       let span = thisDeleteButton.parentElement;
//       let li = span.parentElement;
//       // remove li
//       li.remove();
//     }
//     // alert latter
//     // toast
//   };

//   let span = document.createElement('span');
//   span.append(deleteButton);
//   li.append(span);
//   // append li to ul
//   ul.append(li);

//   // clear input
//   input.value = '';
// }
