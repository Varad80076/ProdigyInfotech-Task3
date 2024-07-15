let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newGamebtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


let turnO =true; //player X : player Y

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){//player O
            box.innerText = "O"
            turnO = false;
        }
        else{//player X
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        
        chkWinner();
    })
})

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add ("hide")
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = ""
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableBoxes();
}
// const noWinner = () => {
//     msg.innerText = ` Better Luck Next Time`;
//     msgcontainer.classList.remove("hide")
//     disableBoxes();
// }
const chkWinner = () => {
    for (let pattern of winPattern){
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val ==pos2val && pos2val == pos3val){

                showWinner(pos1val);
            }
        }
    }
}


newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);