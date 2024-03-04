let choices = document.querySelectorAll(".button");
let coumpScore = document.querySelector("#coumpScore");
let clientScore = document.querySelector("#clientScore");
let message = document.querySelector("#message");
let resetButton = document.querySelector("#resetBtn");
let chComp = document.querySelector("#chComp");



let coumpter = 0;
let player = 0 ;



 let playername = prompt("Enter your name : ");



// guess the random number 

const coumputerChoice  = ()=>{
    const options = ["rock","paper","sicssor"];
    const option = Math.floor(Math.random()*3);
    // console.log("coumputer",options[option]);
    return options[option];
}



const forDraw = ()=>{
    // console.log("draw");
    message.innerText = "Draw😜"

}




const coumpPoint = ()=>{
    coumpter++;
    // console.log(coumpter);
    coumpScore.innerText = coumpter;
    message.innerText = "coumputer gets a point!"
}



const userPoint = ()=>{
    player++;
    // console.log(coumpter);
    clientScore.innerText = player;
    message.innerText = `${playername} gets a point!`
}


const resetBtn = ()=>{
    coumpter = 0;
    player = 0;
    coumpScore.innerText = "0"
    clientScore.innerText = "0";
    message.innerText = "your turn"
    chComp.innerText = "";
     


}
resetButton.addEventListener("click",()=>{
    resetBtn()

});





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

       let userchoice= choice.getAttribute("id");
        // console.log("user choice",userchoice);
        let cChoice = coumputerChoice()
            

        if(userchoice === cChoice){
            forDraw()
        }

            // for coumputer

        if(userchoice !== cChoice && userchoice == "rock" && cChoice == "paper"){
            // console.log("coumputer win");
            coumpPoint()
        }
        if(userchoice !== cChoice && userchoice == "paper" && cChoice == "sicssor"){
            // console.log("coumputer win");
            coumpPoint()
        }
        if(userchoice !== cChoice && userchoice == "sicssor" && cChoice == "rock"){
            // console.log("coumputer win");
            coumpPoint()
        }


        // for user
        
        if(userchoice !== cChoice && userchoice == "rock" && cChoice == "sicssor"){
            // console.log("player win");
            userPoint()
        }
        if(userchoice !== cChoice && userchoice == "paper" && cChoice == "rock"){
            // console.log("player win");
            userPoint()
        }
        if(userchoice !== cChoice && userchoice == "sicssor" && cChoice == "paper"){
            // console.log("player win");
            userPoint()
        }

        chComp.innerText = `coumputer choosen ${cChoice}`

        
        
        

    });

});














