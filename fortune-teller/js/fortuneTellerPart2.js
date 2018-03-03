/*eslint-env browser*/
var ursulaScore;
var varName;
var varNbr;
var varLocation;
var varTitle;
var varNameArray;
var varNbrArray;
var varLocationArray;
var varTitleArray;
//var varNameArray = ["Jane DoeOne", "John DoeTwo", "Mr. T.Three", "The JokerFour"];
var varNameArray = [];
var varNbrArray = [0, 1, 2, 3];
var varLocationArray = ["San Diego", "Sacramento", "Myrtle Beach", "Goose Creek"];
var varTitleArray = ["MVP", "VIP", "Worker Bee", "Unemployed"];
// var studentName was changed to studentVariables;
var studentVariables = ["name", "nbr", "location", "job Title"];
var theScore;
var randomOccurName = 3;
var randomOccurNbr = 2;
var randomOccurLocation = 3;
var randomOccurTitle = 3;
var theStudentRec = [];
var repeat = "y";
var i = 0;
var k = 0;
var h = 0;
var g = 0;
//GET DOM ELEMENTS
var varName0;
var varName1;
var varName2;
var varName3;
var loadNameArray;
var keyhit;
var rate;
varName0 =    window.document.getElementById("varName0");
varName1 =    window.document.getElementById("varName1");
varName2 =    window.document.getElementById("varName2");
varName3 =    window.document.getElementById("varName3");
rate =    window.document.getElementById("interest");

document.enterkey = keyhit;
window.document.write(varName0.value);
window.document.write(varName1.value);
window.document.write("interest" + rate + "varName0" + varName0);
varNameArray.push(varName0);
varNameArray.push(varName1);
varNameArray.push(varName2);
varNameArray.push(varName3);
varNameArray.push(rate);
window.document.write("varNameArray = " + varNameArray + "<br>");

// theStudentRec.push(varName + varNbr + varLocation + varTitle);
function getRandomInt(min, max) {"use strict";
    return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
randomOccurName = getRandomInt(0, 4);
window.document.write("randomOccurName = " + randomOccurName + "<br>");

function getRandomInt(min, max) {"use strict";
    return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
randomOccurNbr = getRandomInt(0, 4);
window.document.write("randomOccurNbr is " + randomOccurNbr + "<br>");


function getRandomInt(min, max) {"use strict";
    return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
randomOccurLocation = getRandomInt(0, 4);
window.document.write("randomOccurLocation is " + randomOccurLocation + "<br>");

function getRandomInt(min, max) {"use strict";
    return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
randomOccurTitle = getRandomInt(0, 4);
window.document.write("randomOccurTitle is " + randomOccurTitle + "<br>");

var maxnbr = 0;
//var maxnbr = varNameArrary.length;

var maxnbr = 4;
window.document.write("maxnbr = " + maxnbr + "<br>");

for (i = 0; i < maxnbr; i++) {
    

    window.document.write("i" + i + "varNameArray[randomOccurName]" + varNameArray[randomOccurName] + "<br>");
    window.document.write("i and nameOccur" + i + randomOccurName + varLocationArray[randomOccurLocation]);
    window.document.write("i" + i + "varNbrArray[randomOccurNbr]" + varNbrArray[randomOccurNbr] + "<br>");
    window.document.write("i and location" + i + randomOccurLocation + varLocationArray[randomOccurLocation]);
    window.document.write("i and title" + i + randomOccurTitle + varTitleArray[randomOccurTitle] + "<br>" + "<br>");
    function getRandomInt(min, max) {"use strict";
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
    randomOccurName = getRandomInt(0, 4);
    window.document.write("randomOccurName = " + randomOccurName + "<br>");

    function getRandomInt(min, max) {"use strict";
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
    randomOccurNbr = getRandomInt(0, 4);
    window.document.write("randomOccurNbr is " + randomOccurNbr + "<br>");


    function getRandomInt(min, max) {"use strict";
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
    randomOccurLocation = getRandomInt(0, 4);
    window.document.write("randomOccurLocation is " + randomOccurLocation + "<br>");

    function getRandomInt(min, max) {"use strict";
        return Math.floor(Math.random() * (max - min)) + min; //MAX is exclusive and the MIN is inclusive
                                }
    randomOccurTitle = getRandomInt(0, 4);
    window.document.write("randomOccurTitle is " + randomOccurTitle + "<br>");
}
//    window.document.write("i" + i + varNbrArray[i]); 
//    window.document.write("i" + i + varLocationArray[i]);  
//    window.document.write("i" + i + varTitleArray[i])   

   
k = (k + 1);
h = (h + 1);
g = (g + 1);
		
window.console.log("<br>" + "--------------------------------------------------" + "<br>");
window.document.write("<br>" + "--------------------------------------------------" + "<br>");
//GET THE VALUES OF THE DOM ELEMENTS, CALCULATE, AND DISPLAY RESULT
    varName0 =    varName0.value;
    varName1 =    varName1.value;
    varName2 =    varName2.value;
    varName3 =    varName3.value;
    rate =          parseFloat(rate.value);
