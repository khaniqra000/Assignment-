// / 2.Evaluating a number game: 
// • Prompt the user to enter a number. 
// • Compare the entered number with a dynamic number value. 
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.
console.log("\n \t \t Evaluating a number game \t\n ");
import inquirer from "inquirer";
const number = await inquirer.prompt({
    name: "num",
    type: "number",
    message: "Please Enter a Number!"
});
let dynamicNmuber = Math.floor(Math.random() * 100);
if (number.num === dynamicNmuber) {
    console.log(`User Number: ${number.num} is Equal to Dynamic number: ${dynamicNmuber}`);
}
else if (number.num > dynamicNmuber) {
    console.log(`User Number: ${number.num} is Greater than Dynamic number: ${dynamicNmuber}`);
}
else if (number.num < dynamicNmuber) {
    console.log(`User Number: ${number.num} is Less than Dynamic number: ${dynamicNmuber}`);
}
;
