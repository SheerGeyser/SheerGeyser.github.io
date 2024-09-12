function calculate() {
    // Получаем значения из полей ввода
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const card = parseFloat(document.getElementById('card').value) || 0;
    const advance = parseFloat(document.getElementById('advance').value) || 0;
    const badgeExpenses = parseFloat(document.getElementById('badgeExpenses').value) || 0;
    const expectedSalary = parseFloat(document.getElementById('expectedSalary').value) || 0;

    // Расчет "ПОЛУЧЕНО ДЕНЕГ"
    const receivedMoney = cash + card + advance;

    // Расчет "НЕДОСТАЕТ"
    const missingMoney = (expectedSalary - badgeExpenses) - receivedMoney;

    // Обновляем результаты на странице
    document.getElementById('receivedMoney').textContent = `Получено денег: ${receivedMoney}`;
    document.getElementById('missingMoney').textContent = `Недостает: ${missingMoney}`;
}
