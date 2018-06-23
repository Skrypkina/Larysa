'use strict';


let userInput;
let asNumber;
let total = 0;
const numbers = [];

do {
     userInput = prompt('Enter the number');
     asNumber = Number(userInput);
   
     if(isNaN(asNumber)) {
       alert('Wrong! Try again');
     }
     else {
        numbers.push(asNumber);
     }


} while(userInput !== null);



for(let i = 0; i < numbers.length; i +=1) {
  total = numbers[i] + total;

}
    
  if (total > 0) {
    alert(`the sum is ${total}`);
}
