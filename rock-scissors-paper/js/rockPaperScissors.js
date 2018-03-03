/*eslint-env browser*/
var i;
var min;
var max;
var answer;
var userChoice;
var again = "y";
var x;
window.document.write("<h4>" + "Assignment 03 Rock, Scissors, Paper" + "</h4>");
function myFunction() {
    "use strict";
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = x;
    userChoice = x;

    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
    }
    var num = getRandomInt(1, 4);
    // window.document.write("varnum " + num);
	
    if (userChoice === "theEnd") {
        num = 9;
    }
    
    switch (num) {

    case 1:
		answer = "scissors"; // 1 point
        window.document.write("<br>" + "userChoice = " + userChoice + "<br>" + "  computer answer =  " + answer);
        if (userChoice === "scissors") {
            window.alert("\nTie Game! \n" + "computer -> " + answer + "\nyou chose -> " + userChoice);   //      tieGame;
                //    go again;
        } else if (userChoice === "paper") {
            window.document.write("<br>" +  "the computer said -> " + answer + "<br>" + "you chose -> " + userChoice + "<br>" + "you LOSE, scissors cut paper");
            window.alert("\nyou LOSE, scissors cut paper!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        } else {
            window.document.write("you WIN, rock breaks scissors" + "<br>" + "computer=> " + answer + "<br>" + "you chose -> " + userChoice);
            window.alert("\nyou WIN, rock breaks scissors!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        }

		break;
    case 2:
		answer = "paper"; // 2 points
        window.document.write("<br>" + "userChoice = " + userChoice + "<br>" + "  computer answer =  " + answer);
        if (userChoice === "paper") {
            window.alert("\nTie Game!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
                //    go again;
        } else if (userChoice === "scissors") {
            window.alert("\nyou WIN, scissors cut paper!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        } else {
            window.alert("\nyou LOSE, paper covers rock!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        }
        break;

    case 3:
        window.document.write("<br>" + "userChoice = " + userChoice + "<br>" + "computer answer =  " + answer);
        answer = "rock";  // 3 points
        if (userChoice === "rock") {
            window.alert("\nTie Game! \n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
            //    go again;
        } else if (userChoice === "scissors") {
            window.alert("you LOSE, rock breaks scissors!\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        } else {
            window.alert("you WIN, " + userChoice + "covers rock" + answer + "\n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
        }
        break;
            
    case 4:
        answer = "error";  // 3 points
        window.document.write("<br>" + "userChoice = " + userChoice + "<br>" + "computer answer =  " + answer);
   
    
        window.alert("\nError, try again! \n" + "computer -> " + answer + "\nyou chose -> " + userChoice);
            //    go again;
        break;
	}
    window.document.write("<br>" + "rockPaperScissors ended. ");
}





//if (again === "y") {
    // userChoice = window.prompt("Enter 1, 2, or 3\n\t<em>3-</em> = rock\n\t2--paper\n\t3--scissors");
    //

//}
