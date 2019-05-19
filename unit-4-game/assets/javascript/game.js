//list all global variables
var yourScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;
var crystal = {
    one:
    {
        name: "one",
        value: 0
    },
    two:
    {
        name: "two",
        value: 0
    },
    three:
    {
        name: "three",
        value: 0
    },
    four:
    {
        name: "four",
        value: 0
    }

}


//begin game/ assign random value at beginning of game to each crystal (from 1-12), assign random value to target score (between 19-120)
var getRandom = function (min, max) {
    return Math.ceil(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    var yourScore = 0;
    targetScore = getRandom(19, 120);
    crystal.one.value = getRandom(1, 12);
    crystal.two.value = getRandom(1, 12);
    crystal.three.value = getRandom(1, 12);
    crystal.four.value = getRandom(1, 12);

    $("#targetScoreDiv").html(targetScore);
    $("#yourScoreDiv").html(yourScore);

}

//add values of crystals to "your score" every time a crystal is clicked
var addValues = function (crystal) {
    yourScore = yourScore + crystal.value;

    $("#yourScoreDiv").html(yourScore);
    checkWin();
}


//add wins and losses to scoreboard
var checkWin = function () {
    if (yourScore > targetScore) {
        alert("You lost!");
        losses++;
        $(".losses").html("Losses: " + losses);
        //restart game
        startGame();
    }

    else if (yourScore === targetScore) {
        alert("You won!");
        wins++;
        $(".wins").html("Wins: " + wins);
        //restart game
        startGame();
    }
}


//every time a crystal is clicked, it's value is logged into "your total"
startGame();

$("#one").click(function () {
    addValues(crystal.one);
});

$("#two").click(function () {
    addValues(crystal.two);
});

$("#three").click(function () {
    addValues(crystal.three);
});

$("#four").click(function () {
    addValues(crystal.four);
});