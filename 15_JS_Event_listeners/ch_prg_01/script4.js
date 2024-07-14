// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Function to generate a random number and display it
function generateNumber() {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the number
    let displayElement = document.getElementById('number-display');
    displayElement.textContent = randomNumber;

    // Determine and apply the appropriate class based on the number's properties
    if (randomNumber % 2 === 0) {
        displayElement.className = 'even';
    } else {
        displayElement.className = 'odd';
    }

    if (isPrime(randomNumber)) {
        displayElement.classList.add('prime');
    }
}

// Event listener for the button click
document.getElementById('generate-btn').addEventListener('click', generateNumber);
