const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-btn")
const close = document.querySelector("#close-btn")
const modeText = document.querySelector("#mode-text")
// let toggleSlider = document.querySelector("#toggleSlider");
let headerBG = "light"




window.addEventListener("scroll",()=>{
    header.classList.toggle("scrolled",window.scrollY > 0);
    
});




// const forAllLocal = ()=>{
//     body.classList.toggle('dark-mode');
//     if(headerBG === "light"){
//         headerBG = "dark"
//         header.style.backgroundColor = "#333138";
//         // header.style.transition = "1s";
//         header.style.color = "white";
//         menu.style.color = "white";
//         close.style.color = "white";
//         modeText.innerText = "Light Mode"
//         localStorage.setItem("enabeledDark",'true');
      
//     }
//     else{
//         headerBG = "light"
//         header.style.backgroundColor = "rgb(222, 222, 222)";
//         header.style.color = "black"
//         // header.style.transition = "1s"
//         menu.style.color = "black";
//         close.style.color = "black";
//         modeText.innerText = "Dark Mode"
//         localStorage.removeItem("enabeledDark");



//     }

// };



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
    }
    else{
        headerBG = "light"
        header.style.backgroundColor = "rgb(222, 222, 222)";
        header.style.color = "black"
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


















