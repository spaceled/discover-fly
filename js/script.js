const firstClass = document.getElementById('firstClass-increase');
firstClass.addEventListener('click', function() {
    const newValue = document.getElementById('value-count') + 0;
    
    const setValue = handleIncrease(newValue);
    document.getElementById('value-count') = setValue;

});

function handleIncrease(id) {
    const quantityIncrease = document.getElementById(id).value;
    const total = parseInt(quantityIncrease) + 1;
    return total;
}