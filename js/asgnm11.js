const para = document.getElementById("inputName");
para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Name: ${name}`;
};


const info = document.getElementById("inputIceCream");
info.addEventListener('click', updateFlavor);

function updateFlavor () {
  const flavor = prompt('Enter favorite ice cream flavor');
  info.textContent = `Favorite flavor: ${flavor}`
};


const bc = document.getElementById("buttonClick");
bc.addEventListener('click', function onClick() {
  bc.style.backgroundColor = '#09F0FF';
  bc.style.color = '#092AFF';
});
