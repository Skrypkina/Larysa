'use strict';
const sharm = 15;
const hurgada = 25;
const taba = 6;
const userInput = prompt('Enter the number of guests');
const asNumber = Number(userInput);


if (Number.isInteger(asNumber) && asNumber > 0) {

    if (asNumber <= taba) {


        const goToTaba = confirm('There are free tours in Taba, Are you sure you want to go to Taba?');
        if (goToTaba) {
            alert('Have a nice trip to Taba!');
        } else {
            const goToSharm = confirm('There are free tours in Sharm, Are you sure you want to go to Sharm?');
            if (goToSharm) {
                alert('Have a nice trip to Sharm!');
            } else {
                const goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
                if (goToHurgada) {
                    alert('Have a nice trip to Hurgada!');
                } else {
                    alert('We are very sorry, come again');
                }
            }
        }

    } else if (asNumber <= sharm) {
        const goToSharm = confirm('There are free tours in Sharm, Are you sure you want to go to Sharm?');
         if (goToSharm) {
            alert('Have a nice trip to Sharm!');
        } else {
            const goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
            if (goToHurgada) {
                alert('Have a nice trip to Hurgada!');
            } else {
                alert('We are very sorry, come again');
            }
        }
    } else if (asNumber <= hurgada ) {
        const goToHurgada = confirm('There are free tours in Hurgada, Are you sure you want to go to Hurgada?');
        if (goToHurgada) {
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

