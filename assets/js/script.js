var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to pass once the Add Task button is clicked
var createTaskHandler = function(event) {
    event.preventDefaul();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
// Event listener for the Ad Task button
formEl.addEventListener("click", createTaskHandler);