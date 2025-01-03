const hamburgerMenu = document.querySelector(".menu-icon");
const nav = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});