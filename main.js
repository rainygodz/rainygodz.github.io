const counterElement = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let counter = Number(counterElement.innerHTML);
console.log(counter);

const decrease = () => {
    if (counter > 0) {
        counter -= 1;
        counterElement.innerHTML = counter;
    }
}

const increase = () => {
    counter += 1;
    counterElement.innerHTML = counter;
}

const reset = () => {
    counter = 0;
    counterElement.innerHTML = counter;
}

decreaseBtn.onclick = decrease;
increaseBtn.onclick = increase;
resetBtn.onclick = reset;