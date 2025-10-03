const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function createTaskElement(taskText, taskTime) {
  const li = document.createElement("li");
  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<div>${taskText}</div><div class="task-time">${taskTime || ""}</div>`;
  const actions = document.createElement("div");
  actions.className = "actions";
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.className = "complete";
  completeBtn.onclick = () => li.classList.toggle("completed");
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      taskInfo.children[0].innerText = newTask;
      taskText = newTask;
    }
  };
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(taskInfo);
  li.appendChild(actions);
  return li;
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;
  if (taskText === "") return;
  const taskElement = createTaskElement(taskText, taskTime);
  taskList.appendChild(taskElement);
  taskInput.value = "";
  taskDateTime.value = "";
});
