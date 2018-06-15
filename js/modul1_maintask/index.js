'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const userAnnulment = 'Отменено пользователем!';
const userIncorrectInput = 'Доступ запрещен!';
const userCorrectInput = 'Добро пожаловать!';
const userName = prompt('Log in');
let userPassword;


if (userName === null) {
    alert(userAnnulment);
} else if (userName === ADMIN_LOGIN) {
    userPassword = prompt('Enter your password');


    switch (userPassword) {
        case null:
            alert(userAnnulment);
            break;
        case ADMIN_PASSWORD:
            alert(userCorrectInput);
            break;
        default:
            alert(userIncorrectInput);
    }
} else {
    alert(userIncorrectInput);
}