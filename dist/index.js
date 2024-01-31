"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let age;
let userQString = 'You are eligible to vote :)';
let userUNQString = 'You are under age and unable to vote atm!';
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function checkUserAge() {
    rl.question('What is your age? ', (age) => {
        rl.close();
        if (age >= 18)
        return console.log( `${userQString} at Age ${age}`);
    else
        return console.log(`${userUNQString}, come back again in ${(18 - age)} number of years`);
            
}
);
   
}
checkUserAge();
//# sourceMappingURL=index.js.map