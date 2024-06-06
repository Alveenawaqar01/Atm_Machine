#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 4546;
console.log("wellcome to  ATM machine code");
let pinanswer = await inquirer.prompt([
    { name: "pin",
        message: " enter you pin code",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("Correct pin code!");
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "please select your option",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountanwer = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]); // = ,+= ,-=
        if (amountanwer.amount > myBalance) {
            console.log("insuffienct amount");
        }
        else {
            myBalance -= amountanwer.amount;
            console.log(`${amountanwer.amount} withdraw succesfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "checkbalance") {
        console.log("your account balance is " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
