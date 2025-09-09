const quantityInput = document.querySelector('.quantity-input');
const plusBtn = document.querySelector('.quantity-btn:nth-of-type(2)');
const minusBtn = document.querySelector('.quantity-btn:nth-of-type(1)');

plusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
});

minusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.querySelector('.quantity-input');
    const plusBtn = document.querySelector('.quantity-btn:nth-of-type(2)');
    const minusBtn = document.querySelector('.quantity-btn:nth-of-type(1)');

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});