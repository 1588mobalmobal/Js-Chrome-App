const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");

const TODOLIST = "to-do-list";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj["id"];
  const span = document.createElement("span");
  span.textContent = newToDoObj["text"];
  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => String(toDo.id) !== li.id);
  saveToDos();
}

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  console.log(newToDoObj);
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoForm);

const savedToDos = localStorage.getItem(TODOLIST);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
}
