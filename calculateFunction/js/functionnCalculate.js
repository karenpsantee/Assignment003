var result = 0;
var output3 = 0;
var tada_value;

//window.document.write("inside currentScore function: input1" + input1 + "input2" + input2 + "operator==> " + operator);

function myFunction(input1, input2, operator, result) {
    "use strict";
    var input1 = parseFloat(window.prompt("enter value 1"));
    var input2 = parseFloat(window.prompt("enter value 2"));
    var operator = (window.prompt("Enter an operator"));
    /*window.document.write("output3" + output3);
    window.document.write("input1" + input1 + "input2" + input2 + "operator==> " + operator);
    window.document.write("input1:" + input1);
    window.document.write("input1:" + input2);
    window.document.write("operator:" + operator);
    window.document.write("what the hell?"); */
    var tada_result;
    if (operator === "*") {
        window.alert(input1 * input2);
        tada_result = input1 * input2;
        tada_value = tada_result;
        window.document.write("result: " + tada_result);
    } else if (operator === "/") {
        window.alert(input1 / input2);
        tada_result = input1 * input2;
        tada_value = tada_result;
        window.document.write("result: " + tada_result);
    } else if (operator === "+") {
        window.alert(input1 + input2);
        tada_result = input1 + input2;
        tada_value = tada_result;
        window.document.write("result: " + tada_result);
    } else if (operator === "-") {
        window.alert(input1 - input2);
        tada_result = input1 - input2;
        tada_value = tada_result;
        window.document.write("result: " + tada_result);
    } else {
        window.alert("invalid operator!");
    }
    //window.alert("result : " + result1);
    //window.alert("result : " + result2);
    //window.document.write("value: " + tada_value);
    window.document.write("result: " + tada_result);
    // return tada_value;

}
window.alert("result : " + result);
myFunction();

