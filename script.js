let tasks = [];
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");
const clearTasksButton = document.getElementById("clearTasks");

function handleSubmission(event) {
    event.preventDefault(); // this function stops our form from reloading the page
    // TODO: Get form input values
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    // TODO: Validate input fields
    if (!taskName || !taskDescription || !taskDeadline) {
        alert("Please fill in all fields");
        return;
    }
    // TODO: Update the tasks array
    tasks.push({ taskName, taskDescription, taskDeadline });
    render();
    }

function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = "";
    tasks.forEach(task => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task.taskName}</td>
        <td>${task.taskDescription}</td>
        <td>${task.taskDeadline}</td>
        `;
        taskTable.appendChild(row);
        });
    }

function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
    }

    taskForm.addEventListener("submit", handleSubmission);
    clearTasksButton.addEventListener("click", init);
    init();