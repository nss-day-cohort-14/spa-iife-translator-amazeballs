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
  }

  
}




})();