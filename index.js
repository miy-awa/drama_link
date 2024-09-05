// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const ticketInput = document.getElementById('tickets');

    addButton.addEventListener('click', () => {
        let currentValue = parseInt(ticketInput.value, 10);
        ticketInput.value = currentValue + 1;
    });

    subtractButton.addEventListener('click', () => {
        let currentValue = parseInt(ticketInput.value, 10);
        if (currentValue > 1) {
            ticketInput.value = currentValue - 1;
        }
    });
});
