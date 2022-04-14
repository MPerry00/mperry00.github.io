const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);


function result() {
  //create new variables
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //replace :insertX: :insertY: :insertZ:
  // console.log(xItem);
  console.log(newStory);
  newStory = newStory.replace(/:insertX:/g,xItem);
  newStory = newStory.replace(/:insertY:/g,yItem);
  newStory = newStory.replace(/:insertZ:/g,zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    weightText = weight.toString()  + ' stones';
    console.log(weightText);

    newStory = newStory.replace('300 pounds',weightText);


    const temperature =  Math.round((94-32)*(5/9));
    temperatureText = temperature.toString() + ' centigrade';
    console.log(temperatureText);

    newStory = newStory.replace('94 fahrenheit', temperatureText);

    // convert fahrenheit to centigrade

    // similar code to step 4
    // replace values in string with temp and weight variables

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
