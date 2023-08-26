const decr = document.querySelector(`[data-action="decrement"]`);
const incr = document.querySelector(`[data-action="increment"]`);
const inner = document.querySelector('#value');

let counterValue = 0;

const handleClick = (event) => {
    if (event.currentTarget.dataset.action === `decrement`) {
        counterValue--;
    } else if (event.currentTarget.dataset.action === `increment`) {
        counterValue++;
    }
    inner.textContent = counterValue;
};

decr.addEventListener("click", handleClick);
incr.addEventListener("click", handleClick);