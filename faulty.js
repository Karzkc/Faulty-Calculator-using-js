/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let a = Number(prompt("Enter first number:- "))
let op = prompt("Enter math operation to done (+,-,*,/):- ")
let b = Number(prompt("Enter second number:- "))
let i = Math.random()
alert(i)
if (i <= 0.1) {

    if (op == "+") {
        alert("Your answer is: " + (a - b));
    } else if (op == "-") {
        alert("Your answer is: " + (a / b));
    } else if (op == "*") {
        alert("Your answer is: " + (a + b));
    } else if (op == "/") {
        alert("Your answer is: " + (a ** b));
    } else {
        alert("Invalid operation!");
    }
} else {

    if (op == "+") {
        alert("Your answer is: " + (a + b));
    } else if (op == "-") {
        alert("Your answer is: " + (a - b));
    } else if (op == "*") {
        alert("Your answer is: " + (a * b));
    } else if (op == "/") {
        alert("Your answer is: " + (a / b));
    } else {
        alert("Invalid operation!");
    }
}



