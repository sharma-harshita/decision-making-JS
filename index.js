console.log("Hello");

// Conditional Statements

// if you are having one condition to check then better you go with if-else statements.

// const ageOfPerson = 3;

// if (ageOfPerson > 21) {
//     console.log("Eligible to get married");
// } else {
//     console.log("Not eligible");
// }


// if you are having two conditions to check then better you go with if-elseif-else  statements.

// const gender = "male";

// if (gender.toLowerCase() === "male") {
//     console.log("Male");
// }else if(gender.toLowerCase() === "Female"){
//     console.log("Female");
// }else{
//     console.log("Transgender");
// }


// Largest among 3 numbers, numbers are 18, 29, 33
const a = 18;
const b = 29;
const c = 3;

// if (a>b && a>c) {
//     console.log("A is largest, its value is : ", a);
// } else if(b>a && b>c) {
//     console.log("B is largest, its value is : ", b);
// } else{
//     console.log("C is largest, its value is : ", c);
// }


// if you are having more than 3 conditions to check then better you go with switch  statements.

// const gender = "male";

// switch (gender) {
//     case "male":
//         console.log("MALE");
//         break;

//     case "female":
//         console.log("FEMALE");
//         break;

//     default:
//         console.log("DEFAULT");
//         break;
// }


//Write down a switch-case statement, which takes num from 1-7 , and give day related to it.
// 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday, 7 = Sunday

switch (true) {
    case a>b && a>c:
        console.log("A is biggest");
        break;
    case b>a && b>c:
        console.log("B is biggest");
        break;
    default:
        console.log("C is biggest");
        break;
}