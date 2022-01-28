const userselections = document.querySelectorAll('[data-selection')

userselections.forEach(userselection => {
    userselection.addEventListener('click', e => {
        const playerSelection = userselection.dataset.selection
        makeSelection(playerSelection)
    })
})

function makeSelection(playerSelection){
    console.log(selection)
}



// function computerPlay(){
//     array = ['rock','paper','scissor'];
//     return array[Math.floor(Math.random() * array.length)];
// }
// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     if(playerSelection == "rock"){
//         if(computerSelection = "scissor"){
//             return "You Win! Rock beats Scissor";
//         }
//         else if(computerSelection == "paper"){
//             return "You Lose! Paper beats Rock";
//         }
//         else{
//             return "Draw! Play Again";
//         }
//     }
//     else if(playerSelection == "scissor"){
//         if(computerSelection == "rock"){
//             return "You Lose! Rock beats Scissor";
//         }
//         else if(computerSelection == "paper"){
//             return "You Win! Scissor beats Paper";
//         }
//         else{
//             return "Draw! Play Again";
//         }
//     }
//     else if(playerSelection == "paper"){
//         if(computerSelection == "scissor"){
//             return "You Lose! Scissor beats Paper";
//         }
//         else if(computerSelection == "rock"){
//             return "You Win! Paper beats Rock";
//         }
//         else{
//             return "Draw! Play Again";
//         }
//     }
//   }


// console.log(computerPlay());
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));