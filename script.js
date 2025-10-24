function append(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value); // Simple evaluation
  } catch (e) {
    display.value = "Error";
  }
}
