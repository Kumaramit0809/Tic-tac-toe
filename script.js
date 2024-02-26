let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO=true ;// playerX,playerY

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6]

];
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }  
        box.disabled = true;

        checkWinner();
     })
})
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for (let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

    
        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 ===position3){
                showWinner(position1);

            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
