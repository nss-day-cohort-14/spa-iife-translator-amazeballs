

function translator () {


  var selectedLanguage = event.target.id;

  var inputText = userInput.value;

  // var inputArray = userInput.value;

  inputArray = [];
  inputText = inputText.replace(/\s{2,}/g," ");

  if (inputText[inputText.length - 1]=== " " ) {
  	inputText = inputText.slice(0, -1);
  };

  inputArray = inputText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" "); 


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