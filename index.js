//Challenge 1: Your Age In Days

function ageInDays() {
let birthYear = prompt ("What year were you born friend?");
let ageInDayss = (2021 - birthYear) * 365;
console.log(ageInDayss);
let h1 = document.createElement("h1");
let textAnswer = document.createTextNode("You are " + ageInDayss + "days old");
h1.setAttribute("id", "ageInDays");
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors



function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function ranToRpsInt() {
    return Math.floor(Math.random() * 3);
}


function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}



function decideWinner(yourChoice, computerChoice) {
   let rpsDatabase = {
        rock: {'scissors': 1, 'rock': 0.5, 'paper': 0},
        paper: {'rock': 1, 'paper': 0.5, 'scissors': 0},
        scissors: {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }; 
        let yourScore = rpsDatabase[yourChoice][computerChoice];
        let computerScore = rpsDatabase[computerChoice][yourChoice];
   
    return [yourScore, computerScore];
}

/*
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return 'message : You lost';
    }
    else if (yourScore === 0.5) {
        return 'message: You tied';
    }
    else {
        return 'message: You won!!';
    }
}
*/
/*
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>"
}
*/