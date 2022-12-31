$(document).ready(function(){
    $("h2").css("color", "red", "font-family", "sans-serif", "font-weight", "bold").padding(5);
    $("*").margin(0).padding(0).css("box-sizing", "border-box");
    $("h1").css("font-family", "sans-serif").font-weight(800).margin(15, 0);
});
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

let computerScore = 1;
let playerScore = 1;

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text2 = document.getElementById('Demo');

const tie = ()=>{
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'orange';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'orange';
}

const win = ()=>{
    text.innerHTML = "It's a Win ! ";
    text.style.color = 'rgb(1, 146, 1)';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'rgb(1, 146, 1)';
}

const lose = ()=>{
    text.innerHTML = "You Loosed ! ";
    text.style.color = 'red';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'red';
}

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               tie();
           }

           else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }
        });
    });
}

game();