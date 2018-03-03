/*eslint-env browser*/
var ursulaScore;
var varName;
var varNbr;
var varLocation;
var varTitle;
// var studentName was changed to studentVariables;
var studentVariables = ["name", "nbr", "location", "job Title"];
var theScore;
var theStudentRec = [];
var repeat = "y";
var i = 0;
var k = 0;
var h = 0;
var g = 0;
var appendSpaces = 0;
var nbrOfScores = 0;
var totalAllScores = 0;
var lastIndexOf;
var averageScore = 0;
var fruits = [];
window.document.write("<br>" + "fortuneTeller.js " + "<br>" + "<br>");
window.console.log("<h3>" + "Student(s)" + " " + " --------"  + "-------------Grade" + "</h3>");
window.document.write("<h3>" + "-------------------------------------------" + "</h3>");
while (repeat === 'y') {
   
    
	varName = (window.prompt("Enter a " + studentVariables[0]));
    window.console.log("varName  " + varName);
    varNbr = parseInt(window.prompt("Enter a " + studentVariables[1]), 10);
    window.console.log("varNbr  " + varNbr);
    varLocation = (window.prompt("Enter a " + studentVariables[2]));
    window.console.log("varLocation  " + varLocation);
    varTitle = (window.prompt("Enter a " + studentVariables[3]));
    window.console.log("varTitle  " + varTitle);
//	if ((isNaN(varNbr) === true) || (g >= 1)) {
    if (isNaN(varNbr) === true) {
        window.console.log("g = " + g);
		repeat = "n";
	} else {window.console.log("repeat" + repeat);
			window.console.log("theScore  " + theScore);
			theStudentRec.push(varName + varNbr + varLocation + varTitle);
            window.document.write("theStudentRec" + theStudentRec + " theStudentRec.length = " + theStudentRec.length);
			var text = "";
			var nameOut;
			nbrOfScores = (nbrOfScores + 1);
			totalAllScores = totalAllScores + theScore;
			if (theScore >= 90) {
			
			nameOut = studentVariables[h];
			window.document.write("<p>" + "<nbsp>" + nameOut + " . . . . . . . . . . . . . . . . . . . . . . . . . .  A "  + "</p>");
		} else if (theScore >= 80) {
		
		nameOut = studentVariables[h];
		appendSpaces = 40 - studentVariables.length;
		window.document.write("<p>" + studentVariables[h] + "  . . . . . . . . . . . . . . . . . . . . . . . .   B " + "</p>");
	} else if (theScore >= 70) {
		window.console.log("C" + studentVariables[h]);
		window.document.write("<p>" + studentVariables[h] + "  . . . . . . . . . . . . . . . . . . . . . . . .    C " + "</p>");
	} else if (theScore >= 60) {
		window.console.log("[h] = " + h + " D " + studentVariables[h] + "<br>");
		window.document.write("<p>" + studentVariables[h] +  "        " + " . . . . . . . . . . . . . . . . . . . . . . . .   D " + "</p>");
	} else if (theScore >= 50) {
		window.console.log("[h] = " + h + "   F " + studentVariables[h] + "<br>");
		window.document.write("<p>" + studentVariables[h] + " .......... ..........   . . . . . . .  . . . . . . .  F " + " </p>");
	} else if (theScore <= 50) {
		window.document.write("<p>" + studentVariables[h] + "  . . . . . . . . . . . . . . . . . . . . . . . .   F " + " "  + "</p>");
		
	}
		k = (k + 1);
		h = (h + 1);
		g = (g + 1);
		
		}
}

averageScore = (totalAllScores / nbrOfScores);
window.console.log("<br>" + "--------------------------------------------------" + "<br>");
window.document.write("<br>" + "--------------------------------------------------" + "<br>");
window.document.write("<h3>" + "Average Points------------------"  + averageScore + "</h3>");