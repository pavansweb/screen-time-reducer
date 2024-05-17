const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.getElementById("sideNav");

// Add click event listener to menu icon
menuIcon.addEventListener("click", toggleNav);

function toggleNav() {
    // Add a class to the menu icon to change its appearance temporarily
    menuIcon.classList.add("clicked");

    // Toggle side nav
    sideNav.style.left = (sideNav.style.left === "-300px") ? "0" : "-300px";

    // Remove the "clicked" class after a short delay
    setTimeout(() => {
        menuIcon.classList.remove("clicked");
    }, 200); // Adjust the delay as needed
}

// Sample tasks data
const tasksData = [
    { task: "Do 10 pushups", status: "0/10" },
    { task: "Do 10 pushups", status: "0/10" },
    { task: "Do 10 pushups", status: "0/10" },
];

const taskDisplay = document.getElementById("taskDisplay");

// Function to render tasks in the table
function renderTasks() {
    taskDisplay.innerHTML = ""; // Clear existing tasks

    tasksData.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.task}</td>
            <td>${task.status}</td>
            <td><button class="task-button">Start</button></td>
            <td> 20 coins </td>
        `;
        taskDisplay.appendChild(row);
    });
}

renderTasks();