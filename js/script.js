
document.getElementById('firstClass-increase').addEventListener('click', function () {
    ticketClassChange('firstClass', true)
});

document.getElementById('firstClass-decrease').addEventListener('click', function () {
    ticketClassChange('firstClass', false)
});

document.getElementById('economy-increase').addEventListener('click', function () {
    ticketClassChange('economyClass', true)
});

document.getElementById('economy-decrease').addEventListener('click', function() {
    ticketClassChange('economyClass', false)
});

// Success Message

document.getElementById('book-now').addEventListener('click', function() {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';

    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
});
function ticketClassChange(ticketClass, isIncrease) {
    const ticketClassCount = getInputValue(ticketClass);

    let ticketNewCount = ticketClassCount;
    if (isIncrease == true) {
        ticketNewCount = ticketClassCount + 1;
    }
    if (isIncrease == false && ticketClassCount > 0) {
        ticketNewCount = ticketClassCount - 1;
    }
    document.getElementById(ticketClass + '-count').value = ticketNewCount;

    // For Total Ticketing Price
    calculateTotal(); 
}


// Calculating Total Price
function calculateTotal() {
    const firstClassCount = getInputValue('firstClass')

    const economyClassCount = getInputValue('economyClass')

    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// Take input value
function getInputValue(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + '-count');
    const ticketClassCount = parseInt(ticketInput.value);
    ticketInput.value = ticketClassCount;
    return ticketClassCount;
}

// The End