'use strict';

let userInput;
let found = false;
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attempts = 3;
let newInput;

do {
 userInput = prompt('Enter the password');

 for (let i = 0; i < passwords.length && !found; i++) {
  if (passwords[i] === userInput) {
    alert('welcome');
    found = true;
    break;
  } 
}

if(found === false) {
  do {
    newInput = prompt('try again');
    
      

  } while(found);
}




} while(userInput);



 

  

 