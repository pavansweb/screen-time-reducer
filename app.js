window.onload = function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sideNav = document.getElementById("sideNav");
    const taskButtons = document.querySelectorAll(".task-button");


    // Add click event listener to menu icon
    menuIcon.addEventListener("click", function() {
        toggleNav();
    });

    // Function to toggle navigation bar
    function toggleNav() {
        if (sideNav.style.left === "-300px") {
            sideNav.style.left = "0";
        } else {
            sideNav.style.left = "-300px";
        }
    }

    // Sample tasks data (replace with your actual tasks data)
    const tasksData = [

        {task: "Do 10 pushups", status: "0/10"},
        {task: "Do 10 pushups", status: "0/10"},
        {task: "Do 10 pushups", status: "0/10"},
        {task: "Do 10 pushups", status: "0/10"},
        {task: "Do 10 pushups", status: "0/10"},
        {task: "Do 10 pushups", status: "0/10"},


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
                <td>
                    <button class="task-button">Start</button>
                </td>
            `;
            taskDisplay.appendChild(row);
        });
    }




    // Function to handle task button click and navigate to different window
    function handleTaskButtonClick(index) {
        const task = tasksData[index];
        switch (task.task) {
            case "Type for 15 minutes":
                window.open("type.html", "_blank");
                break;
            case "Code for 15 minutes":
                window.open("code.html", "_blank");
                break;
            case "Do 10 pushups":
                window.open("pushups.html", "_blank");
                break;
            default:
                console.log("Unknown task");
        }
    }


    // Initial rendering of tasks
    renderTasks();
};