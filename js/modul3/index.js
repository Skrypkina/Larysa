'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const checkLoginValidity = function(login) {
    let arr = login.split('');

    if((arr.length >= 4) && (arr.length <= 16)) {
        return true;
    }
    return false;
}

// console.log(checkLoginValidity("Mango"));


const checkIfLoginExists  = function(logins, login) {

    for (const value of logins) {
    if(logins.includes(login)) {
        return true;
    }
       return false;
    }
};

// console.log(checkIfLoginExists(logins, "Denis"));


const addLogin = function(logins, login) {
   if (checkLoginValidity(login) ===false)
        {
            alert('Ошибка! Логин должен быть от 4 до 16 символов');
        }
         else if (checkIfLoginExists (logins, login))
            {
                alert ('Такой логин уже используется!');
            }
            else {
                logins.push(login);
                alert('Логин успешно добавлен!');
                }

};

   
addLogin(logins, "qwerty123");

console.log(logins);