let boxes=document.querySelectorAll(".box");
let body=document.querySelectorAll("body");
let winner=document.querySelector(".winner");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newgame");
let heading=document.querySelector("h1");
let game=document.querySelector(".game");
const winning_conditions=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let a=prompt("Name of Player 1")
let b=prompt("Name of player 2")
let boxes_clicked=0;
let condition_Player1=[];
let condition_Player2=[];
turn_player_1=true;
let winner_is_player1=false; 
let winner_is_player2=false;
// this is the funtion for which tells who is the winner 
function check_winner(){
    for(let i of winning_conditions){
    // checking if the player 1 has won or not 
        let d1=0;
        for(let j=0;j<3;j++){
            for(let w of condition_Player1){
                if(w==i[j]){
                    d1+=1;
                }
            } 
        }
        if(d1==3){
            winner_is_player1=true;
            reset.style.display="none";
            heading.style.display="none";
            game.style.display="none";
            winner.innerText=`${a.toUpperCase()} has won`;
            winner.style.display="flex";
            newgame.style.display="flex";
            console.log("winner is player 1");
            break;
        }
    // checking weather player 2 has won or not 
        let d2=0;
        for(let j=0;j<3;j++){
            for(let w of condition_Player2){
                if(w==i[j]){
                    d2+=1
                }
            }
        }
        if(d2==3){
            winner_is_player2=true;
            reset.style.display="none";
            heading.style.display="none";
            game.style.display="none";
            winner.innerText=`${b.toUpperCase()} has won`;
            winner.style.display="flex";
            newgame.style.display="flex";
            console.log("winner is player 2")
            break;
        }
    // this is the code to check if the game is ended with no winner
    if(boxes_clicked==9){
        if(winner_is_player1==false && winner_is_player2==false){
            reset.style.display="none";
            heading.style.display="none";
            game.style.display="none";
            winner.innerText="!!!It's a Tie!!!";
            winner.style.display="flex";
            newgame.style.display="flex";
            console.log("it is tie")
            break;
        }
    }
    }};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(box.innerText.length==0){
            boxes_clicked+=1
            if (turn_player_1==true){
                box.innerText="X";
                condition_Player1.push(parseInt(box.getAttribute("id")));
                turn_player_1=false;
            }else if(turn_player_1==false){
                box.innerText="O";
                condition_Player2.push(parseInt(box.getAttribute("id")));
                turn_player_1=true;
            }
        }
        if(winner_is_player1==true){
            console.log("winner is player 1")
        }else if(winner_is_player2==true){
            console.group("winner is player 2")
        }
        check_winner();
    });
});
newgame.addEventListener("click",()=>{
    reset.style.display="flex";
    heading.style.display="flex";
    game.style.display="grid";
    boxes.forEach((box)=>{
        box.innerText="";
    });
    boxes_clicked=0;
    winner_is_player1=false;
    winner_is_player2=false;
    winner.innerText="Player 1 has won";
    winner.style.display="none";
    newgame.style.display="none";
    condition_Player1=[];
    condition_Player2=[];
    turn_player_1=true;
    a=prompt("Name of Player 1");
    b=prompt("Name of player 2");
});
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    boxes_clicked=0;
    winner_is_player1=false;
    winner_is_player2=false;
    condition_Player1=[];
    condition_Player2=[];
    turn_player_1=true;
    a=prompt("Name of Player 1");
    b=prompt("Name of player 2");
});
