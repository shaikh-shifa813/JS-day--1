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

const noDuplicate = [...new Set(arr)];
const squared = noDuplicate.map(num => num * num);

console.log("No Duplicates:", noDuplicate);
console.log("Squared:", squared);

//QUESTION(4)
const reversestring = (str) => str.split('').reverse().join('');
console.log(reversestring("Shifa"));

//QUESTION(5)
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("shifa"));  
console.log(isPalindrome("level"));
