// let sales: number = 123_456_789;
// let course: String = 'Typing';
// let is_published: boolean = true;
// let my_array = [];
// my_array[0] = 1;
// my_array[1]= '1';

// let userTuple: [number, String];
// let tuple_array: typeof userTuple[] = [];

// //use const to optimize this
// enum UserShirtSize {small, medium, large}
// let mySize: UserShirtSize = UserShirtSize.medium;

// //functions
// function calculateTax(income: any): number {
//     if (income < sales) 
//         income ++;
//     return 0;
// }

// //type aliases
// type Employee = {
//         readonly id: number,
//         name: string,
//         retire: (date: Date) => void,
// }

// //objects
// //readonly modifier helps to make objects read only
// let employee: Employee
//  = {id: 1, name: "Jabala", retire: (date: Date ) => {
//     console.log(date);
// }};

// //Unions Types
//  function kgToLbs (weight: number | string){
// // because weight would only extend the functions of both values, we use Narrowing
// if (typeof weight === 'number') 
//     weight * 22;
// else
//     return parseInt(weight) * 2.2;
//  }

//  kgToLbs(10);
//  kgToLbs('String here');

//  //Intersection Types
//  let weight: number & string;
//  type Draggable = {
//     drag: () => void
//  };
//  type Resizeable = {
//     resize: () => void
//  };
//  type UIWidget = Draggable & Resizeable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

// //Literal types(exact, specific value)
// type Quantity = 50 | 100;
// type Metric = 'cm' | 'inch';
// let quantity: Quantity = 50;

// //nullable types
// function greet(name: string | null | undefined) {
//     if(name)
//     console.log(name.toUpperCase());
//     else
//     console.log('Hola Como Estas')
// }
// greet(null);

// //optional chaining
// /// optional property access operator
// type Customer  = {
//     birthday?: Date
// };
// function getCustomer(id: number): Customer | null | undefined   {
//     return id === 0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
// console.log(customer?.birthday?.getFullYear );

// ///optional element access operator
// /// customers?.[0]

// ///optional call operator
// let log: any = null;
// log?.('a');


//My own personal vote-checker
import readline from 'readline';


let age: number;
let userQString: String = 'You are eligible to vote :)';
let userUNQString: String = 'You are under age and unable to vote atm!';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

function checkUserAge():String {
    rl.question('What is your age? ', () => {
        rl.close();
      });
    if(age >= 18)
 return `${userQString} at Age ${age}`
else
return `${userUNQString}, come back again in ${(18 - age)} number of years`
}
checkUserAge();
