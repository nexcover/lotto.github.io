
function generateRandomNumbers() {
    const numbers = [];

    for (let i = 1; i <= 60; i++) {
        numbers.push(i);
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    const selectedNumbers = numbers.slice(0, 6);

    return selectedNumbers;
}

function displayNumbers(numbers) {
    const numbersContainer = document.getElementById('randomNumbers');
    numbersContainer.innerHTML = '';

    numbers.forEach(number => {
        const numberElement = document.createElement('span');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    });
}

function generateAndDisplayRandomNumbers() {
    const result = generateRandomNumbers();
    displayNumbers(result);
}