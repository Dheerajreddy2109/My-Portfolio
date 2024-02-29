const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const navbar = document.querySelector("nav")
const menu = document.querySelector("#menu-btn")
const close = document.querySelector("#close-btn")
let headerBG = "light"
// body.classList.contains('dark-mode') ? "dark" : "light";



window.addEventListener("scroll",()=>{
    header.classList.toggle("scrolled",window.scrollY > 0);
    
});



toggleButton.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
    if(headerBG === "light"){
        headerBG = "dark"
        header.style.backgroundColor = "#232121";
        header.style.transition = "0.7s";
        header.style.color = "white";
        navbar.style.backgroundColor = "#232121";
        navbar.style.color = "white";
        menu.style.color = "white";
        close.style.color = "white";
    }
    else{
        headerBG = "light"
        header.style.backgroundColor = "#fff";
        header.style.color = "black"
        header.style.transition = "0.7s"
        navbar.style.backgroundColor = "#fff";
        navbar.style.color = "black";
        menu.style.color = "black";
        close.style.color = "black";

    }

});











