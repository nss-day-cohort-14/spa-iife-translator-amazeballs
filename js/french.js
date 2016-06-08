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


      maker.frenchTranslate = function() {

        for (var i = 0; i < inputArray.length; i++) {
          var currentWord = frenchWords[inputArray[i]]
          if (currentWord === undefined) {
            console.log("word not in lexicon");
          } else {
            
            return languageTranslator.translateTxt(currentWord);
          }
        } 
      }

      

      return maker;

    })(languageTranslator);