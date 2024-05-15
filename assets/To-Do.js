const form = document.getElementById("toDoForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskToDo = document.getElementById("inputId");

  //---------------------------------------prima
  /* console.log(taskToDo.value); */

  /* const nuovaTask = {
    task: taskToDo.value,
  };

  const lavagnaTask = document.getElementById("lavagna");
  lavagnaTask.innerText = nuovaTask.task; */

  //---------------------------------------seconda

  /* const taskValue = taskToDo.value;
  console.log(taskValue);
  const lavagna = document.getElementById("lavagna");
  lavagna.append(taskValue);
  console.log(event);
  taskToDo.value = ""; */

  //--------------------------------------terza

  const taskValue = taskToDo.value;

  const lavagna = document.getElementById("lavagna");

  lavagna.innerText = taskValue;
});
