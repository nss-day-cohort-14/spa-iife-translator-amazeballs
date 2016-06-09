var languageTranslator = (function(maker) {




	var germanWords = {
		"happy": "glücklich",
		"holidays": "ferien",
		"from": "von",
		"your": "ihre",
		"friends": "freunde",
		"at": "beim",
		"amaze": "verblüffen",
		"balls": "bälle"
	
	};


      maker.germanTranslate = function() {


        for (var i = 0; i < inputArray.length; i++) {


          var currentWord = germanWords[inputArray[i]]

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


