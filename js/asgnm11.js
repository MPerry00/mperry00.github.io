const para = document.getElementById("inputName");
para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Name: ${name}`
};



const info = document.getElementByID("inputIceCream");
para.addEventListener('click', updateFlavor);

function updateFlavor () {
  const flavor = prompt('Enter favorite ice cream flavor');
  para.textContent = `Favorite flavor: ${flavor}`
};
/*
if(iceCream === 'chocolate') {
  alert('Thats my favorite too!');
}
  else {
  alert('Awww, but chocolate is my favorite...');
} */



const travel = document.getElementById("inputDestination");
para.addEventListener('click', updateDestination);

function updateDestination () {
  const place = prompt('Enter favorite destination');
  para.textContent = `Destination: ${place}`
}
