var languageTranslator = (function () {

//private variables

var translatedText = [];

return {

  getTranslatedText: function () {
    return translatedText;
  },

  translateTxt: function (translatedWord) {
    translatedText.push(translatedWord);
    console.log("translatedText", translatedText);
  },

  reassembleOutput: function() {
    // console.log(translatedText.join(" "));

    outputArea.innerHTML = "";
    outputArea.innerHTML = translatedText.join(" ");
    translatedText = [];
  }
}




})();