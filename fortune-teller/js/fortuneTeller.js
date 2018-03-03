/*eslint-env browser*/
var ursulaScore;
var varName;
var varNbr = 0;
var varLocation;
var varTitle;
// var studentName was changed to studentVariables;
var studentVariables = ["name", "nbr", "location", "job Title"];
var theScore;
var theStudentRec = [];
var nameArray = [];
var nbrArray = [];
var locationArray = [];
var titleArray = [];
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
//varName = (window.prompt("Enter a " + studentVariables[0]));
//window.console.log("varName  " + varName);
//varNbr = parseInt(window.prompt("Enter a " + studentVariables[1]), 10);
//window.console.log("varNbr  " + varNbr);
//varLocation = (window.prompt("Enter a " + studentVariables[2]));
//window.console.log("varLocation  " + varLocation);
//varTitle = (window.prompt("Enter a " + studentVariables[3]));
//window.console.log("varTitle  " + varTitle);
//	if ((isNaN(varNbr) === true) || (g >= 1)) {  */
while (repeat === "y") {
    if ((isNaN(varNbr) === true) || (g >= 2)) {
        window.document.write("isnNaN setting repeat to n");
        window.document.write("g = " + g);
        repeat = "n";
        window.document.write("<br>" + "endinput" + nameArray + "<br>" + nbrArray + "<br>" + locationArray +
                             titleArray);
      //  break;
    } else {window.console.log("repeat" + repeat);
        window.document.write("<br>" + "fortuneTeller.js " + "<br>" + "<br>");
        window.console.log("<h3>" + "Student(s)" + " " + " --------"  + "-------------Grade" + "</h3>");
        window.document.write("<h3>" + "-------------------------------------------" + "</h3>");
            window.alert("Enter \nName, Nbr, Location, and Title.  \nProvide 3 sets of data. After nine panels it is okay to enter NULL values")
            varName = (window.prompt("Enter a " + studentVariables[0]));
        
            varNbr = parseInt(window.prompt("Enter a " + studentVariables[1]), 10);
            
            varLocation = (window.prompt("Enter a " + studentVariables[2]));
            window.console.log("varLocation  " + varLocation);
            varTitle = (window.prompt("Enter a " + studentVariables[3]));
            
            window.console.log("varName  " + varName);
            window.console.log("varNbr  " + varNbr);
            window.console.log("varLocation  " + varLocation);
            window.console.log("varTitle  " + varTitle);
        // theStudentRec.push(varName + varNbr + varLocation + varTitle);
            
          //  window.document.write("theStudentRec" + theStudentRec + " theStudentRec.length = " + theStudentRec.length);
        nameArray.push(varName);
        window.document.write("nameArray" + nameArray);
        nbrArray.push(varNbr);
        window.document.write("varNbr" + nbrArray);
            window.document.write(locationArray + "locationArray");
            nbrArray.push(varLocation);
            window.document.write("varLocation" + varLocation);
            titleArray.push(varTitle);
            window.document.write(titleArray + "titleArray");
			var text = "";
			var nameOut;
			nbrOfScores = (nbrOfScores + 1);
            window.document.write("WHILE LOOP" + "nbrOfScores" + nbrOfScores + "repeat" + repeat + "<br>");
            window.document.write("before increment g = " + g);
            g = (g + 1);
            window.document.write("after incrementg = " + g);
            }
}
/*for (i = 0; i <= nbrOfScores; i++) {
	window.document.write("FOR LOOP" + "nbrOfScores" + nbrOfScores + "repeat" + repeat + "<br>");
	window.document.write("<p>" + nameArray[g]);
}  */

/*averageScore = (totalAllScores / nbrOfScores);
window.console.log("<br>" + "--------------------------------------------------" + "<br>");
window.document.write("<br>" + "--------------------------------------------------" + "<br>");
window.document.write("<h3>" + "Average Points------------------"  + averageScore + "</h3>");*/