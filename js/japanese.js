var languageTranslator = (function(maker) {

  console.log("japanese.js is loaded");



    var japaneseWords = {"happy": "幸せ",
      "holidays": "休日",
      "from": "から",
      "your": "あなたの",
      "friends": "友達",
      "at": "に",
      "amaze": "驚愕",
      "balls": "ボール"
    };


      maker.japaneseTranslate = function() {

        for (var i = 0; i < inputArray.length; i++) {

          console.log("inputArray.length", inputArray.length);

          var currentWord = japaneseWords[inputArray[i]]

          if (currentWord === undefined) {
            console.log("word not in lexicon");
            languageTranslator.translateTxt("[word not in lexicon]");
          } else {
            
            languageTranslator.translateTxt(currentWord);
          }
        } 

        languageTranslator.reassembleOutput();
      }


      return maker;

    })(languageTranslator);