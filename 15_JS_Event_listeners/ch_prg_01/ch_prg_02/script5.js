function displayKeycode(event) {
    const keycodeDisplay = document.getElementById('keycode-display');
    keycodeDisplay.textContent = `Keycode: ${event.keyCode}`;
}

document.addEventListener('keydown', displayKeycode);
