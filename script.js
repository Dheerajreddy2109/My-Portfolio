const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-btn")
const close = document.querySelector("#close-btn")
const modeText = document.querySelector("#mode-text")
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
        header.style.transition = "1s";
        header.style.color = "white";
        menu.style.color = "white";
        close.style.color = "white";
        modeText.innerText = "Light Mode"
    }
    else{
        headerBG = "light"
        header.style.backgroundColor = "#fff";
        header.style.color = "black"
        header.style.transition = "1s"
        menu.style.color = "black";
        close.style.color = "black";
        modeText.innerText = "Dark Mode"


    }


    
});











