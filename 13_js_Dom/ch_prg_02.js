// Get elements from the DOM
const yearHeading = document.querySelector('h1');
const dateAndTimeHeading = document.querySelector('h2');
const challengesList = document.querySelectorAll('ul li');

// Task 1: Change year color every 1 second
setInterval(() => {
  const randomColor = getRandomColor();
  yearHeading.style.color = randomColor;
}, 1000);

// Task 2: Change date and time background color every second
setInterval(() => {
  const randomColor = getRandomColor();
  dateAndTimeHeading.style.backgroundColor = randomColor;
}, 1000);

// Task 3, 4, 5: Apply background colors based on challenge status
challengesList.forEach(challenge => {
  const challengeText = challenge.textContent.toLowerCase();
  if (challengeText.includes('done')) {
    challenge.style.backgroundColor = 'green'; // Completed challenge
  } else if (challengeText.includes('ongoing')) {
    challenge.style.backgroundColor = 'yellow'; // Ongoing challenge
  } else if (challengeText.includes('coming')) {
    challenge.style.backgroundColor = 'red'; // Coming challenge
  }
});

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
