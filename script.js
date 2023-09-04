document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        } else if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });

    function addTask(text) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    }
});