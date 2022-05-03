const generateCol = document.querySelector('#genNew');

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.border-color = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

generateCol.addEventListener("click", setBg);
setBg();
