const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-btn");
const close = document.querySelector("#close-btn");
const modeText = document.querySelector("#mode-text");
let headerBG = "light";

// Cache menu and close buttons
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (headerBG === "light") {
        headerBG = "dark";
        header.style.backgroundColor = "#232121";
        header.style.transition = "0.7s";
        header.style.color = "white";
        menuBtn.style.color = "white";
        closeBtn.style.color = "white";
        modeText.innerText = "Light Mode";
    } else {
        headerBG = "light";
        header.style.backgroundColor = "#fff";
        header.style.color = "black";
        header.style.transition = "0.7s";
        menuBtn.style.color = "black";
        closeBtn.style.color = "black";
        modeText.innerText = "Dark Mode";
    }
});