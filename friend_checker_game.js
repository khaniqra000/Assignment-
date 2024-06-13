// python
// 3.Friend checker game: 
// • Prompt the user to enter a name. 
// • Use a switch statement to check if the entered name is a known friend. 
// • Output a confirmation message if the name is known, otherwise output a default 
// response.
console.log("\n \t \t 3.Friend checker game \t ");
import friendInquirer from "inquirer";
const name = await friendInquirer.prompt({
    name: "Username",
    type: "input",
    message: "Please Enter your name:\n"
});
switch (name.Username) {
    case "Iqra":
        console.log(`Hello ${name.Username}!, You are my know friend`);
        break;
    case "Knawal":
        console.log(`Hello ${name.Username}!, You are my know friend`);
        break;
    case "Saba":
        console.log(`Hello ${name.Username}!, You are my know friend`);
        break;
    case "Rameen":
        console.log(`Hello ${name.Username}!, You are my know friend`);
        break;
}
;
