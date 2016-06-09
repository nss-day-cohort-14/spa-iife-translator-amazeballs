

function translator () {

  console.log("userInput:", userInput.value);

  console.log("button clicked:", event.target.id);

  var selectedLanguage = event.target.id;

  var inputText = userInput.value;

  // var inputArray = userInput.value;
  inputArray = inputText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" "); 

  console.log("usr input", inputText);
  console.log("inputArray", inputArray);

  languageTranslator[selectedLanguage](inputArray);

}





//get button elements by id

var inputArray;

var userInput = document.getElementById("userInput");

var outputArea = document.getElementById("outputArea");

var germanButton = document.getElementById("germanTranslate");

var frenchButton = document.getElementById("frenchTranslate");

var japaneseButton = document.getElementById("japaneseTranslate");


// add event listeners
germanButton.addEventListener("click", translator);

frenchButton.addEventListener("click", translator);

japaneseButton.addEventListener("click", translator);