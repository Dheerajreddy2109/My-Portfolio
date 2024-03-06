const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-btn")
const close = document.querySelector("#close-btn")
const modeText = document.querySelector("#mode-text")
const imgHome = document.querySelector(".top-right img")
const logo = document.querySelector(".logo")
// let toggleSlider = document.querySelector("#toggleSlider");
let headerBG = "light"




window.addEventListener("scroll",()=>{
    header.classList.toggle("scrolled",window.scrollY > 0);
    
});
window.addEventListener("scroll",()=>{
    const ani = document.querySelector(".top-left")
    let top = window.scrollY
    let offSet = ani.offsetTop - 150;
    let height = ani.offsetHeight;

    if(top >=offSet && top< offSet + height){
        ani.classList.add('show-animation')
    }
    else{

        ani.classList.remove('show-animation')
    }


})


const forAllLocal = ()=>{
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    menu.classList.toggle('dark-mode');
    close.classList.toggle('dark-mode');
    if(headerBG === "light"){
        headerBG = 'dark'
        header.style.backgroundColor = "#333138";
        header.style.color = "white";
        modeText.innerText = "Light Mode"
        localStorage.setItem("enabeledDark",'true');
        imgHome.style.opacity ="0.8"
        logo.style.color = "rgb(248, 99, 99)"
    }
    else{
        headerBG = "light"
        header.style.backgroundColor = "#FFFFFA";
        header.style.color = "black"
        modeText.innerText = "Dark Mode"
        localStorage.removeItem("enabeledDark")
        imgHome.style.opacity ="1"
        logo.style.color = "rgb(248, 99, 99)"

        
    }
};

toggleButton.addEventListener('click',forAllLocal);

window.addEventListener("DOMContentLoaded", ()=>{
    const localDark = localStorage.getItem("enabeledDark")
    if(localDark === 'true'){
        forAllLocal();
        
        
    }
    toggleButton.checked = localDark === 'true';  


});


















