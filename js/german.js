var languageTranslator = (function(maker) {

	console.log("german.js is loaded");



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

          console.log("inputArray.length", inputArray.length);

          var currentWord = germanWords[inputArray[i]]

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


