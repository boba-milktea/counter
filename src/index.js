const number = document.getElementById('number');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

number.value = 0;

// using increment operator to increase the number
incrementBtn.addEventListener('click', () => {
    number.value++;
});

// using decrement operator to decrease the number
decrementBtn.addEventListener('click', () => {
    number.value--;
    // the number can't be negative
    number.value < 0 ? (number.value = 0) : null;
});

reset.addEventListener('click', () => {
    // confirm with the user if he/she really want to reset the number
    confirm('Reset the number?') ? (number.value = 0) : null;
});
