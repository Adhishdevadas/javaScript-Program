// Data for top 10 countries and languages (example data)
const topCountries = [
    { country: 'China', population: 1444216107 },
    { country: 'India', population: 1393409038 },
    { country: 'United States', population: 332915073 },
    // Add more countries...
];

const topLanguages = [
    { language: 'Mandarin Chinese', speakers: 918000000 },
    { language: 'Spanish', speakers: 460000000 },
    { language: 'English', speakers: 379000000 },
    // Add more languages...
];

// Function to create bar chart
function createBarChart(containerId, data, labelKey, valueKey) {
    const chartContainer = document.getElementById(containerId);
    chartContainer.innerHTML = ''; // Clear previous content

    data.forEach(item => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.width = `${(item[valueKey] / data[0][valueKey]) * 100}%`;
        bar.style.backgroundColor = getRandomColor(); // Random color for each bar
        bar.textContent = `${item[labelKey]} (${item[valueKey]})`;
        chartContainer.appendChild(bar);
    });
}

// Utility function to get random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create charts on page load
window.onload = function() {
    createBarChart('countries-chart', topCountries, 'country', 'population');
    createBarChart('languages-chart', topLanguages, 'language', 'speakers');
};
