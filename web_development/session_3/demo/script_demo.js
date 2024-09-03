//Define a target, somwhere to inject other code
const target = document.getElementsByClassName('target');

//Define your button
const btn = document.getElementById('btn');

//Initialise variables if needed

//Add an event listener to your button
btn.addEventListener('click', function () { //you could write a function directly in your event listener
  console.log('hi')
  //more code here!
});

//... or you can reference a function from somewhere else in your code by calling/invoking it e.g 'addParagraph'
function addParagraph() {
  console.log('btn clicked');
}