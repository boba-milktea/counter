// DOM
const dom = {
    number: document.getElementById('number'),
    increment: document.getElementById('increment'),
    decrement: document.getElementById('decrement'),
    reset: document.getElementById('reset')
};

// data

const data = {
    count: 0
};

// updating DOM
const updateDom = () => {
    dom.number.value = data.count;
};

// handlers
const handleIncrement = () => {
    data.count++;
    updateDom();
};

const handleDecrement = () => {
    data.count <= 0 ? (data.count = 0) : data.count--;
    updateDom();
};

const handleReset = () => {
    confirm('Reset the number?') ? (data.count = 0) : null;
    updateDom();
};

// events
dom.increment.addEventListener('click', handleIncrement);
dom.decrement.addEventListener('click', handleDecrement);
dom.reset.addEventListener('click', handleReset);
