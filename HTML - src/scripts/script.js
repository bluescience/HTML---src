function cuck(){
	switch(kek.value){

		case "1":
		alert(1);
		break;

		case "music":
		$("div").before('<audio controls><source src="audio/Necromancer3.wav" type="audio/wav"></audio> Necromancer by Liam ');
		break;

		case "iframe":
		$("div").before('<iframe src="reverseGuess.html"></iframe>');
		break;

		case "reverseGuess":
		window.location = "reverseGuess.html";
		break;

		case "reverseWord":
		window.location = "reverseWord.html";
		break;

		case "phonebook":
		window.location = "phonebook.html";
		break;

		case "quiz":
		window.location = "quiz.html";
		break;

		case "rngGame":
		window.location = "rngGame.html";
		break;

		case "absoluteValue":
		window.location = "absoluteValue.html";
		break;

		case "sort":
		window.location = "sort.html";
		break;

		default:
		console.log("Input recieved");

}

	/*if(kek.value == "crash"){
		window.location = "http://crashsafari.com/";
	}
	else if(kek.value == "1"){
		alert(1);
	}
	else if(kek.value == "music"){
		$("div").before('<audio controls><source src="audio/Necromancer3.wav" type="audio/wav"></audio> Necromancer by Liam ');
		//document.write('<audio controls><source src="audio/Necromancer3.wav" type="audio/wav"></audio>');
	}
	else if(kek.value == "page1"){
		window.location = "reverseGuess.html";
	}
	else if(kek.value == "iframe"){
		$("div").before('<iframe src="reverseGuess.html"></iframe>');
	}
	*/

}

onload = function () {
       var e = document.getElementById('kek');
       e.oninput = cuck;
       // e.onpropertychange = e.oninput; // for IE8
       // e.onchange = e.oninput; // FF needs this in <select><option>...
       // other things for onload()
    };