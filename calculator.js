var button = document.getElementsByClassName('button');
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var count = 0;

function fun() {
    var value = this.getAttribute('data-value');
    if (value == "+") {
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = ""
    } else if (value == "-") {
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = ""


    } else if (value == "/") {
        operator = "/";
        operand1 = parseFloat(display.textContent);
        display.innerText = ""
    } else if (value == "S") {
        operator = "*"
        operand1 = parseFloat(display.textContent)
        display.innerText = eval("-1 *" + operand1)

    } else if (value == ".") {
        if (count == 0) {
            operand1 = parseFloat(display.textContent)
            display.innerText = operand1 + ".";
            count++;
        } else {
            display.innerText = "ERROR"
        }

    } else if (value == "*") {
        operator = "*";
        operand1 = parseFloat(display.textContent)
        display.innerText = ""

    } else if (value == "=") {
        operand2 = parseFloat(display.textContent)
        var result = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = result;

    } else if (value == "%") {
        operator = "%";
        operand1 = parseFloat(display.textContent)
        display.innerText = ""

    } else if (value == "AC") {
        operand1 = 0;
        operand2 = null;
        operator = null;
        count = 0;
        display.innerText = "";


    } else {
        display.innerText += value;
        // if (operator != null) {
        //     display.innerText = ""
        // }
    }
}
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", fun)
}