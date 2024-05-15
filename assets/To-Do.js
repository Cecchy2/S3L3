const form = document.getElementById("toDoForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskToDo = document.getElementById("inputId");

  const taskValue = taskToDo.value;

  const lavagna = document.getElementById("lavagna");

  const liTaskValue = document.createElement("li");
  liTaskValue.innerText = taskValue;

  lavagna.appendChild(liTaskValue);

  taskToDo.value = "";
});
