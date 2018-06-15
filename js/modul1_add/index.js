'use strict';
const sharm = 15;
const hurgada = 25;
const taba = 6;
const userInput = prompt('Enter the number of guests');
const asNumber = Number(userInput);


if (Number.isInteger(asNumber)) {

    if (asNumber <= taba && asNumber !== 0) {


        let goToTaba = confirm('There are free tours in Taba, Are you sure you want to go to Taba?');
        if (goToTaba === true) {
            alert('Have a nice trip to Taba!');
        } else {
            let goToSharm = confirm('There are free tours in Sharm, Are you sure you want to go to Sharm?');
            if (goToSharm === true) {
                alert('Have a nice trip to Sharm!');
            } else {
                let goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
                if (goToHurgada === true) {
                    alert('Have a nice trip to Hurgada!');
                } else {
                    alert('We are very sorry, come again');
                }
            }
        }

    } else if (asNumber <= sharm && asNumber !== 0) {
        let goToSharm = confirm('There are free tours in Sharm, Are you sure you want to go to Sharm?');
         if (goToSharm === true) {
            alert('Have a nice trip to Sharm!');
        } else {
            let goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
            if (goToHurgada === true) {
                alert('Have a nice trip to Hurgada!');
            } else {
                alert('We are very sorry, come again');
            }
        }
    } else if (asNumber <= hurgada && asNumber !== 0) {
        let goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
        if (goToHurgada === true) {
            alert('Have a nice trip to Hurgada!');
        } else {
            alert('We are very sorry, come again');
        }




    } else if (asNumber > hurgada) {
        alert('We are very sorry here are not so many places in any group');
    } else if (asNumber === 0) {
        alert('Input Error');
    }
} else if (Number.isNaN(asNumber)) {
    alert('Input Error');
} else if (asNumber % 2 !== 0) {
    alert('Input Error');
}