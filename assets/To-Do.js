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

  liTaskValue.addEventListener("click", function () {
    liTaskValue.classList.toggle("sbarrato");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "fatto";
  deleteButton.addEventListener("click", function () {
    lavagna.removeChild(liTaskValue);
  });

  liTaskValue.appendChild(deleteButton);
});
