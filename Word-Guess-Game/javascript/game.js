//Array
var coffees = ["CAPPUCCINO", "ESPRESSO", "MACCHIATO", "AMERICANO"]

//Get random index of coffees array
var computerRandIndex = Math.floor(Math.random() * coffees.length);

var computerPickWord = coffees[computerRandIndex];
var numberofGuessCount = 12;
var wins = 0;
var losses = 0;
var wrongGuessLetter = "";
var rightGuessLetter = "";
var boardGame = [];

for (var i = 0; i < computerPickWord.length; i++) {
    boardGame.push("_");
}

var userInput = "";

var displayBoardDiv = document.getElementById("currentWord");
var displayWinDiv = document.getElementById("winCount");
var displayWrongGuessDiv = document.getElementById("wrongGuesses");
var displayGuessesRemainingDiv = document.getElementById("guessesRemaining");

displayBoardDiv.textContent = boardGame.join(" ");
displayGuessesRemainingDiv.textContent=numberofGuessCount;
function checkBoardWithComputerPickedWord() {

    for (var i = 0; i < computerPickWord.length; i++) {
        if (userInput === computerPickWord[i].toLowerCase()) {
            boardGame[i] = userInput;
        }
    }

    displayBoardDiv.textContent = boardGame.join(" ");
}

function reset() {
    //Array
    coffees = ["CAPPUCCINO", "ESPRESSO", "MACCHIATO", "AMERICANO"]

    //Get random index of coffees array
    computerRandIndex = Math.floor(Math.random() * coffees.length);

    computerPickWord = coffees[computerRandIndex];
    numberofGuessCount = 12;
    wrongGuessLetter = "";
    rightGuessLetter = "";
    boardGame = [];

    for (var i = 0; i < computerPickWord.length; i++) {
        boardGame.push("_");
    }

    userInput = "";

    displayBoardDiv = document.getElementById("currentWord");

    displayBoardDiv.textContent = boardGame.join(" ");
} 


document.onkeyup = function (event) {
    userInput = event.key.toLowerCase().toString();

    console.log(userInput);
    checkBoardWithComputerPickedWord();

    if (boardGame.indexOf("_") === -1) {
        wins++;
        displayWinDiv.textContent=wins;

        reset();


    }
    else{ 
        if(computerPickWord.indexOf(userInput)===-1)
        {
            wrongGuessLetter = wrongGuessLetter+userInput+", ";
            displayWrongGuessDiv.textContent=wrongGuessLetter;

            numberofGuessCount=numberofGuessCount -1; 


            displayGuessesRemainingDiv.textContent=numberofGuessCount;

            if(numberofGuessCount===0)
            reset();
        }
    }


}


