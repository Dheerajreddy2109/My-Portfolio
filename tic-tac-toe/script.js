let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newGamebtn = document.querySelector("#new-game");
let winner = document.querySelector("#winner");
let display = document.querySelector(".hide")
let count = 0;




let clickO = true;


const pattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (clickO) {
            box.innerText = "O"
            clickO = false;

        } else {
            box.innerText = "X"
            clickO = true
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner()
        if(count === 9 && !isWinner){
            winner.innerText = `The match is draw`

            display.classList.remove("hide");
            gameOver()

        }


    });
});

const restartGame = () => {
    clickO = true;
    count = 0;
    newGame();
    winner.innerText = ""
    display.classList.add("hide")

}




const checkWinner = () => {
    for (const pattern of pattrens) {
        let postion1 = boxes[pattern[0]].innerText;
        let postion2 = boxes[pattern[1]].innerText;
        let postion3 = boxes[pattern[2]].innerText;

        if (postion1 != "" && postion2 != "" && postion3 != "") {
            if (postion1 === postion2 && postion2 === postion3) {
                winner.innerText = `congratulations player " ${postion1} "is the Winner`

                display.classList.remove("hide");
                gameOver()
                return true;
            }
            
        }

    }

};




const gameOver = () => {
    for (let box of boxes) {

        box.disabled = true

    }

}
const newGame = () => {
    for (let box of boxes) {

        box.disabled = false;
        box.innerText = "";


    }

}


resetbtn.addEventListener("click", restartGame);
newGamebtn.addEventListener("click", restartGame);




