// Keyboard sound effects
const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2575.mp3');
const errorSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-error-2745.mp3');

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play().catch(e => console.log("Audio paused (click first)"));
}

function playError() {
  errorSound.currentTime = 0;
  errorSound.play().catch(e => {});
}

// Modify existing functions
function append(value) {
  playClick();
  // ... rest of your code ...
}

function calculate() {
  try {
    // ... calculation ...
  } catch {
    playError();
    // ... error handling ...
  }
}
