var icons = [
    'apple', 'apricot', 'banana', 'big_win', 'cherry', 'grapes', 'lemon', 'lucky_seven', 'orange', 'pear', 'strawberry', 'watermelon',
];

var slots;
var cols;

window.addEventListener('DOMContentLoaded', function(event) {
    slots = document.querySelector('.container');
    cols = document.querySelectorAll('.col');

    let i = 0;
    for (let col of cols) {
        let str = '';
        let firstThree = '';
        for (let x = 0; x < 40 + (i * 3); x++) {
            let icon = icons[Math.floor(Math.random() * icons.length)];
            let part = '<div class="icon" data-item="' + icon + '"><img src="items/' + icon + '.png"></div>';
            str += part
            if (x < 3) firstThree += part;
        }
        col.innerHTML = str + firstThree;

        ++i;
    }

    document.querySelector('input').focus();
});

/**
 * @param elem The button itself
 */
function spin(elem) {
    let baseDuration = 2.7 + randomDuration();
    let incrementingEachStep = 0.3;

    for (let col of cols) {
        baseDuration += incrementingEachStep + randomDuration();
        col.style.animationDuration = baseDuration + "s";
    }

    elem.setAttribute('disabled', true);
    slots.classList.toggle('spinning', true);
    window.setTimeout(setResult, 1500);

    window.setTimeout(function () {
        slots.classList.toggle('spinning', false);
        elem.removeAttribute('disabled');
        elem.focus();
    }.bind(elem), (baseDuration + 0.2) * 1000);
}

/**
 * Sets the result items at the beginning and the end of the columns
 */
function setResult() {
    for (let col of cols) {

        let results = [
            icons[Math.floor(Math.random() * icons.length)],
            icons[Math.floor(Math.random() * icons.length)],
            icons[Math.floor(Math.random() * icons.length)]
        ];
        let icon = col.querySelectorAll('.icon img');
        for (let x = 0; x < 3; x++) {
            icon[x].setAttribute('src', 'items/' + results[x] + '.png');
            icon[(icon.length - 3) + x].setAttribute('src', 'items/' + results[x] + '.png');
        }
    }
}

/**
 * @returns {number} 0.00 to 0.09 inclusive
 */
function randomDuration() {
    return Math.floor(Math.random() * 10) / 100;
}