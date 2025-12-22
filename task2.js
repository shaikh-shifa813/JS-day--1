//QUESTION(1)
let x = 6
if (x %2 === 0)
{
    console.log("number is  even:",x);
}else{
    console.log("number is odd:",x);
}

//QUESTION(2)
let a = 2
let b = 3
let c = 4
if ((a > b && a > c)){
    console.log("largest number is:",a)
}else if ((b > a && b > c)){
    console.log("largest number is:",b)
}else{
    console.log("largest number is:",c)
}

//QUESTION(3)
for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0) {
        console.log("number:", i);
    }
}

//QUESTION(4)
let num1 = 20;
let num2 = 30;
let operation = "div"; 

switch (operation) {
    case "add":
        console.log("Addition result:", num1 + num2);
        break;
    case "sub":
        console.log("Subtraction result:", num1 - num2);
        break;
    case "pro":
        console.log("Product result:", num1 * num2);
        break;
    case "div":
        if (num2 === 0) {
            console.log("Cannot divide by zero!");
    } else {
            console.log("Division result:", num1 / num2);
        }
        break;
    default:
        console.log("Invalid operator");
}
