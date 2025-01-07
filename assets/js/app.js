const hamburgerMenu = document.querySelector(".menu-icon");
const nav = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
    if (nav.classList.contains("active")) {
        document.querySelector(".menu-icon").style.color = "#fafafd";

    } else {
        document.querySelector(".menu-icon").style.color = "#08080d"; 
    }
});