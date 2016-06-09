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
			var currentWord = germanWords[inputArray[i]]
			if (currentWord === undefined) {
				console.log("Word not in lexicon");
			} else {

				return languageTranslator.translateTxt(currentWord);
			}
		}
	}




	return maker;

})(languageTranslator);