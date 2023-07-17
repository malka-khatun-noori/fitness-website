function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Event listener for the menu button click
var menuButton = document.getElementById("menu");
menuButton.addEventListener("click", toggleSidebar);