// script.js
function calculateWeight() {
    const weightOnEarth = parseFloat(document.getElementById('weight').value);
    const selectedPlanet = document.getElementById('planet').value;
    let surfaceGravity;

    switch (selectedPlanet) {
        case 'Earth':
            surfaceGravity = 1;
            break;
        case 'Venus':
            surfaceGravity = 0.907;
            break;
        case 'Mars':
            surfaceGravity = 0.377;
            break;
        case 'Jupiter':
            surfaceGravity = 2.364;
            break;
        default:
            surfaceGravity = 1; // Default to Earth
    }

    const weightOnSelectedPlanet = weightOnEarth * surfaceGravity;
    document.getElementById('result').textContent = `Weight on ${selectedPlanet}: ${weightOnSelectedPlanet.toFixed(2)} N`;
}
