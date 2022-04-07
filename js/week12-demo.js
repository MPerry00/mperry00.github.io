// document.querySelector('button') -- look up by element
// document.querySelector('.new-quote button') -- look up by class
// document.querySelector('#js-new-quote') -- look up by ID

// querySelector looks for the first instance of each element - if you
//  look up button it will only apply to the first button in script


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

//API (bits of code already written that we can use data from)
