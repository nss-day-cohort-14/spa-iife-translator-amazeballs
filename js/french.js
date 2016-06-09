var languageTranslator = (function(maker) {




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
            languageTranslator.translateTxt("[word not in lexicon]");
          } else {
            
            languageTranslator.translateTxt(currentWord);
          }
        } 

        languageTranslator.reassembleOutput();
      }


      return maker;

    })(languageTranslator);