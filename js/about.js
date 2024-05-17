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

