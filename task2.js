//QUESTION(1)
let x = 6
if (x %2 == 0)
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
for(i = 0;i<=100;i++)
{
    if(i % 5!= 0)
    {
        console.log("number:",i)
    }
}

//QUESTION(4)
x = 20;
y = 30;
operation = "sub"

switch(operation) {
    case "add":
        console.log("number of addition is:",x + y);
        break;
    case "sub":
        console.log("number of substraction is:",x - y);
        break;
    case "pro":
        console.log("number of product is:",x * y);
        break;
    case "div":
        console.log("number of division is:",x / y);
        break;
    default:
        console.log("Invelid operator");
}
