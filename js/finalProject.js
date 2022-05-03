const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

//const endpoint = 'https://catfact.ninja/fact';

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote() {
  console.log("quote button was clicked");
  // try keyword tries some code and looks for errors
  try {
    // define new variable - fetch the URL
    const response = await fetch(endpoint)
    // if the response is not "ok" (receive error)
    if (!response.ok) {
    // then throw an error in console
      throw Error(response.statusText)
    }
    // if the response IS okay then move on (return json from website)
    const json = await response.json();
    // output json in the console
    console.log(json);
    displayQuote(json.activity);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}






//const quoteButton = document.querySelector('#js-new-color');
//quotebutton.addEventListener('click', getColor)

//const getColor() {
  //const randomColor = Math.floor(Math.random()*16777215).toString(16);
  //document.body.style.backgroundColor = "#" + randomColor;
  //color.innerHTML = "#" + randomColor;
//}

//function displayColor(colorVal) {
//  const quoteText = document.querySelector('#js-color-text');
  //quoteText.textContent = colorVal;
//}
