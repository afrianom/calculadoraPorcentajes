document.getElementById('percentage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const total = parseFloat(document.getElementById('total').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(total) || isNaN(percentage)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const result = (total * percentage) / 100;
    document.getElementById('result').textContent = `El ${percentage}% de ${total} es ${result}`;
});

document.getElementById('percentage-form2').addEventListener('submit', function(event) {
    event.preventDefault();

    const total2 = parseFloat(document.getElementById('total-rest').value);
    const percentage2 = parseFloat(document.getElementById('percentage-rest').value);

    if (isNaN(total2) || isNaN(percentage2)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const percentageValue = (total2 * percentage2) / 100;
    const result2 = total2 - percentageValue;
    document.getElementById('result-rest').textContent = `El total después de restar el ${percentage2}% a ${total2} es ${result2}`;
});

document.getElementById('percentage-form3').addEventListener('submit', function(event) {
    event.preventDefault();

    const total3 = parseFloat(document.getElementById('total-oc').value);
    const percentage3 = parseFloat(document.getElementById('percentage-oc').value);

    if (isNaN(total3) || isNaN(percentage3)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const percentageValue2 = (100 * percentage3) / total3;
    const result3 = percentageValue2;
    document.getElementById('result-oc').textContent = `Si tienes ${percentage3} PODS ocupados de ${total3}, el porcentaje de ocupación es ${result3}%`;
});