function calculateSalary() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const advance = parseFloat(document.getElementById('advance').value) || 0;
    const card = parseFloat(document.getElementById('card').value) || 0;
    const badge = parseFloat(document.getElementById('badge').value) || 0;
    const expectedSalary = parseFloat(document.getElementById('expectedSalary').value) || 0;

    let totalPenalties = 0;
    document.querySelectorAll('.penalty-input').forEach(function(input) {
        totalPenalties += parseFloat(input.value) || 0;
    });

    const totalSalary = cash + advance + card - badge - totalPenalties;
    document.getElementById('totalSalary').textContent = totalSalary;

    const difference = totalSalary - expectedSalary;
    const differenceElement = document.getElementById('difference');

    if (difference === 0) {
        differenceElement.textContent = 'Разница: 0 руб. Всё совпадает.';
        differenceElement.style.color = 'green';
    } else {
        differenceElement.textContent = `Разница: ${difference} руб.`;
        differenceElement.style.color = 'red';
    }
}

document.getElementById('addPenalty').addEventListener('click', function() {
    const penaltyDiv = document.createElement('div');
    penaltyDiv.className = 'penalty';
    const penaltyInput = document.createElement('input');
    penaltyInput.type = 'number';
    penaltyInput.className = 'penalty-input';
    penaltyInput.value = 0;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', function() {
        penaltyDiv.remove();
        calculateSalary();  // Обновляем расчет при удалении штрафа
    });

    penaltyInput.addEventListener('input', calculateSalary);  // Пересчет при изменении значения штрафа

    penaltyDiv.appendChild(penaltyInput);
    penaltyDiv.appendChild(removeButton);
    document.getElementById('penalties').appendChild(penaltyDiv);

    calculateSalary();  // Пересчет после добавления нового штрафа
});

// Добавляем обработчики событий для полей
document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', calculateSalary);
});

calculateSalary();  // Пересчитываем зарплату при загрузке страницы
