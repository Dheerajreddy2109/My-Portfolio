const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-btn")
const close = document.querySelector("#close-btn")
const modeText = document.querySelector("#mode-text")
let headerBG = "light"




window.addEventListener("scroll",()=>{
    header.classList.toggle("scrolled",window.scrollY > 0);
    
});




const forAllLocal = ()=>{
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    menu.classList.toggle('dark-mode');
    close.classList.toggle('dark-mode');
    if(headerBG === "light"){
        headerBG = 'dark'
        modeText.innerText = "Light Mode"
        localStorage.setItem("enabeledDark",'true');
    }
    else{
        headerBG = "light"
        modeText.innerText = "Dark Mode"
        localStorage.removeItem("enabeledDark")
        
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


















