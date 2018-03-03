/*eslint-env browser*/
var i;
var min;
var max;
var coinFlip;
var answer;
var userChoice;
var again = "y";
window.console.log("<h1>" + "Assignment 03 Rock, Scissors, Paper" + "</h1>");
window.document.write("<h4>" + "Assignment 03 Rock, Scissors, Paper" + "</h4>");
if (again === "y") {
    userChoice = window.prompt("Enter 1, 2, or 3\n\t<em>3-</em> = ROCK\n\t2--PAPER\n\t3--SCISSORS");

    function getRandomInt(min, max) {"use strict";
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
        }
    var num = getRandomInt(1, 4);
    window.console.log("varnum " + num);
	
    switch (num) {
    case 1:
		answer = "rock";  // 3 points
		window.document.write(" " + i + " => " + answer + "<br>");
        if (userChoice === "3") {
            window.alert("Tie Game");
                //    go again;
        } else if (userChoice === "2") {
            window.alert("you WIN, paper covers rock");
        } else {
            window.alert("you lose, rock break scissors");
        }
        window.document.write("the next line31 is BREAK");
        break;
    case 2:
		answer = "scissors"; // 2 points
		window.document.write(" " + i + " => " + answer + "<br>");
        if (userChoice === "2") {
            window.alert("Tie Game");
                //    go again;
        } else if (userChoice === "1") {
            window.alert("you LOSE, scissors cut paper");
        } else {
            window.alert("you WIN, rock break scissors");
        }
        window.document.write("the next line44 is BREAK");
        break;
    case 3:
		answer = "paper"; // 1 point
		window.document.write(" " + i + " => " + answer + "<br>");
        if (userChoice === "1") {
            window.alert("Tie Game");    //      tieGame;
                //    go again;
        } else if (userChoice === "2") {
            window.alert("you WIN, scissors cut paper");
        } else {
            window.alert("you LOSE, paper cover rock");
        }
        window.document.write("the next line59 is BREAK");
		break;
	}
	window.console.log("try again, type\n  tails\nor \n   heads");
	window.alert("try again, type\n  tails\nor \n   heads");
    window.document.write("<br>" + "03-coin-flip-Redux ended. ");
}