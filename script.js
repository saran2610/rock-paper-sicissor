let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let taskText = taskInput.value;
  let taskItem = document.createElement("li");
  taskItem.innerText = taskText;
  taskList.appendChild(taskItem);
  taskInput.value = "";
  taskItem.addEventListener("click", completeTask);
}

function completeTask(event) {
  let taskItem = event.target;
  taskItem.classList.toggle("completed");
}
