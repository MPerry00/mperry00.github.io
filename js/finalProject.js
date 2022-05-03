const quoteButton = document.querySelector('#js-new-color');
quotebutton.addEventListener('click', getColor)

const getColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

function displayColor(colorVal) {
  const quoteText = document.querySelector('#js-color-text');
  quoteText.textContent = colorVal;
}
