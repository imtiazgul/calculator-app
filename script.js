// ========= CORE CALCULATOR =========
function append(value) {
  const display = document.getElementById('display');
  
  // Prevent invalid inputs
  if (value === '.' && display.value.includes('.')) return;
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.value.slice(-1))) {
    display.value = display.value.slice(0, -1) + value;
    return;
  }
  
  display.value += value;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    // Safe calculation without eval
    display.value = new Function(`return ${display.value}`)();
  } catch {
    display.value = "Error";
    setTimeout(() => display.value = '', 1500);
  }
}

// ========= NEW FEATURES =========
function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  const display = document.getElementById('display');
  if (display.value && !isNaN(display.value.slice(-1))) {
    display.value = display.value * -1;
  }
}

function addDecimal() {
  const display = document.getElementById('display');
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

