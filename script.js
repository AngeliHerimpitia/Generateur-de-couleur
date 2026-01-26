const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const copiedMessage = document.getElementById('copiedMessage');
const historyDiv = document.getElementById('history');
const hexInput = document.getElementById('hexInput');

let currentColor = '#FFFFFF';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase();
}

function applyColor(color) {
  currentColor = color;
  document.body.style.backgroundColor = color;
  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;
}

function isValidHex(hex) {
  return /^#([0-9A-F]{6})$/i.test(hex);
}

document.getElementById('generateBtn').onclick = () => {
  applyColor(randomColor());
};

document.getElementById('saveBtn').onclick = () => {
  const div = document.createElement('div');
  div.className = 'color-item';
  div.style.backgroundColor = currentColor;
  div.title = currentColor;
  div.onclick = () => applyColor(currentColor);
  historyDiv.prepend(div);
};

document.getElementById('clearHistoryBtn').onclick = () => {
  historyDiv.innerHTML = '';
};

document.getElementById('testHexBtn').onclick = () => {
  const hex = hexInput.value.trim().toUpperCase();
  if (isValidHex(hex)) {
    applyColor(hex);
  } else {
    alert('Code HEX invalide');
  }
};

colorCode.onclick = () => {
  navigator.clipboard.writeText(currentColor);
  copiedMessage.style.opacity = '1';
  setTimeout(() => copiedMessage.style.opacity = '0', 900);
};

applyColor(randomColor());
