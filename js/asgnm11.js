const para = document.getElementByID("inputName");

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `${name}`
}


const info = document.getElementByID("inputIceCream")

para.addEventListener('click', updateFlavor);

function updateFlavor () {
  const flavor = prompt('Enter favorite ice cream flavor');
  para.textContent = `${flavor}`
}


if(iceCream === 'chocolate') { /* if value in parenthesis is TRUE then do this */
  alert('Thats my favorite too!');
}
  else { /* if value in parenthesis is FALSE then do this */
  alert('Awww, but chocolate is my favorite...');
  }
