


function translator () {

  console.log("userInput:", userInput.value);

  console.log("button clicked:", event.target.id);



}





//get button elements by id
var userInput = document.getElementById("userInput")

var outputArea = document.getElementById("outputArea")

var germanButton = document.getElementById("german")

var frenchButton = document.getElementById("french")

var japaneseButton = document.getElementById("japanese")


// add event listeners
germanButton.addEventListener("click", translator);

frenchButton.addEventListener("click", translator);

japaneseButton.addEventListener("click", translator);