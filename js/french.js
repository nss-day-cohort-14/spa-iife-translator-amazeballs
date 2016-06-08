var languageTranslator = (function(maker) {

  console.log("french.js is loaded");



    var frenchWords = {"happy": "joyeux",
      "holidays": "anniversaire",
      "from": "dans",
      "your": "votres",
      "friends": "amis",
      "at": "a",
      "amaze": "amaze",
      "balls": "balls"

    };


      maker.frenchTranslate = function(inputArray) {
        for (var i = 0; i < inputArray.length; i++) {
          if (frenchWords[inputArray[i]] === undefined) {
            throw console.log("word not in lexicon");
          } else {
            languageTranslator.tranlateTxt(inputArray[i]);
          }
        } 
      }

      

      return maker;

    })(languageTranslator);