import { stack } from './stack';

document.getElementById('peek').addEventListener('click', () => {
  alert(stack.peek() || 'Stacken är tom');
});

document.getElementById('pop').addEventListener('click', () => {
  const value = stack.pop();
  alert(value || 'Stacken är redan tom');
  updateDisplay();
});

document.getElementById('push').addEventListener('click', () => {
  const value = prompt('Vad vill du pusha till stacken?');
  if (value) {
    stack.push(value);
    updateDisplay();
  }
});

function updateDisplay() {
  document.getElementById('top_of_stack').textContent = stack.peek() || 'n/a';
}
