document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle-checkbox");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("change", function() {
        if (this.checked) {
            navMenu.classList.add("slide");
        } else {
            navMenu.classList.remove("slide");
        }
    });
});
