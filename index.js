// 1. Miles-to-Kilometers Converter (Operators): 
// • Create a variable named miles and assign a numeric value representing distance in miles. 
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934. 
// • Store the converted distance in kilometers in a variable named kilometers. 
// • Use console.log to print a message in the following format:  
// The distance of 130 kms is equal to 209.2142 miles
console.log("\n \t \t Miles-to-Kilometers Converter (Operators)\t\n ");
const miles = 209.2142;
const kilometers = miles * 1.60934;
console.log(`The distance of ${miles} miles is equal to $ {kilometers.tofixed(4)} kilometers`);
//phython
// 4.Functions: 
// • Set up two different variables with different values. 
// • Call a function with these variables as arguments and output the result using console.log. 
// • Create a second call to the function with two more numbers as arguments.
console.log("\n\t\t 4.Functions \t ");
function solution(num1, num2) {
    console.log(`First Number is: ${num1} \n Second Number is: ${num2} `);
}
console.log("\n First Call\n");
let number1 = 10;
let number2 = 20;
solution(number1, number2);
console.log("\n Second Call\n");
let number3 = 30;
let number4 = 50;
solution(number3, number4);
// 5.Calculator project using function: 
// • Set up two variables containing number values. 
// • Set up a variable to hold an operator (+ or -). 
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result. 
// • Call the function with the variables and operator, and output the result using console.log. 
// • Update the operator value and call the function again with the updated arguments. 
console.log("\n\t\t 5.Calculator project using function:\n\t\t");
let num1 = 5;
let num2 = 9;
let operator = "+";
function Calculator(num1, num2, operator) {
    if (operator == "+")
        return (num1 + num2);
    else if (operator == "-")
        return (num1 - num2);
    else
        return ("Invalide Operator");
}
let result = Calculator(num1, num2, operator);
console.log(`${num1} ${operator} ${num2} = ${result}`);
operator = "-";
result = Calculator(num1, num2, operator);
console.log(`${num1} ${operator} ${num2} = ${result}`);
// 6.Anonymous functions: 
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console. 
// • Pass an argument into the function. 
// • Create the same function as a normal function declaration.
console.log("\n\t\t 6.Anonymous functions:\t\n");
let print_Anonymous = function (value) {
    console.log(value);
};
print_Anonymous("Soon Inshallah Complete Programer");
console.log("\nNORMAL FUNCTION.\n");
function print_Normal_function(value) {
    console.log(value);
}
;
print_Normal_function("Iqra The complete Programer");
export {};
