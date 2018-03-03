var result = 0;
var output3 = 0;
var tada_value;

//window.document.write("inside currentScore function: input1" + input1 + "input2" + input2 + "operator==> " + operator);

function myFunction(input1) {
    "use strict";
    input1 = parseFloat(window.prompt("enter value 1"));
//    var input2 = parseFloat(window.prompt("enter value 2"));
//    var operator = (window.prompt("Enter an operator"));
    /*window.document.write("output3" + output3);
    window.document.write("input1" + input1 + "input2" + input2 + "operator==> " + operator);
    window.document.write("input1:" + input1);
    window.document.write("input1:" + input2);
    window.document.write("operator:" + operator);
    window.document.write("what the hell?"); */
    var tada_result;
    if (isNaN(input1)) {
        window.alert("error will robinson, error!\nInput1 is not numeric");
    } else {
        tada_result = (input1 / 2);
        window.alert("wholefNumber= " + input1 + "\nhalfNumber" + tada_result);
        window.document.write("result: " + tada_result);
    }
    //window.alert("result : " + result1);
    //window.alert("result : " + result2);
    //window.document.write("value: " + tada_value);
    window.document.write("result: " + tada_result);
    // return tada_value;

}
window.alert("result : " + result);
myFunction();

