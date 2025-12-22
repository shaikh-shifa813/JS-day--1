//QUESTION(1)
function checknumber(Number){
   if (Number % 2 == 0){
        return"even";
}else{
    return"odd";
}
}
console.log(checknumber(21));

//QUESTION(2)
function largestnumber(a,b,c){
    if((a > b && a > c)){
        return a;
    }else if ((b > a && b > c)){
        return b;
    }else{
        return c;
    }
}
console.log(" the largest number is:");
console.log(largestnumber(20,40,60));

//QUESTION(3)
const arr = [1, 2, 2, 3, 4];
let noDuplicate = [];
for (let i = 0; i < arr.length; i++) {
  if (!noDuplicate.includes(arr[i])) {
    noDuplicate.push(arr[i]);
  }
}
let squared = [];
for (let i = 0; i < noDuplicate.length; i++) {
  squared.push(noDuplicate[i] * noDuplicate[i]);
}

console.log(squared);
console.log(noDuplicate);


//QUESTION(4)
const reversestring = (str) => str.split('').reverse().join('');
console.log(reversestring("Shifa"));

//QUESTION(5)
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');

  if (str === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
console.log(isPalindrome("shifa"));


