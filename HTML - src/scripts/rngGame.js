alert("This is the 'Random Number Guessing Game'");
var txt = "txt";
var confirmation = confirm("Do you want to play?");
var numCheck = true;

if(confirmation){
var difficulty =	prompt("Great! Here is how to play: This code will randomely choose a number between 1 and 10000, Up to you to guess the right number. Would you like to play easy mode, medium mode, hard mode, or impossible mode.", "medium mode");
var i;
if(difficulty.toUpperCase() === "EASY" || difficulty.toUpperCase() === "E" || difficulty.toUpperCase() === "EASY MODE"){
	alert("You have chosen easy mode");
	i = 20;
}
else if(difficulty.toUpperCase() === "MEDIUM" || difficulty.toUpperCase() === "M"|| difficulty.toUpperCase() === "MEDIUM MODE"){
	alert("You have chosen medium mode");
	i = 15;
}
else if(difficulty.toUpperCase() === "HARD" || difficulty.toUpperCase() === "H" ||difficulty.toUpperCase() === "HARD MODE"){
	alert("You have chosen hard mode");
	i = 10;
}	
else{
	alert("You have chosen impossible mode");
	i = 5;
}
	
	var randNum = Math.floor(Math.random() * 10000) + 1;
	if (randNum < 1){
		randNum = 1;
	} 
	for(i = i; i > 0; i--){
		var guess = parseInt(prompt("Guess a number between 1 and 10000. You have " + i + " tries left."));
		while(numCheck === true){
			if(isNaN(guess) === true || guess === ""){
				//throw new Error("PLEASE WRITE A NUMBER");
				guess = prompt("* ERROR * PLEASE WRITE A NUMBER * ERROR *");
				
			}
			else{
				numCheck = false;
			}
			
		}
		numCheck = true;
		if(guess > randNum){
			alert("The number you guessed is superior to the number generated.");
		}
		else if(guess < randNum){
			alert("The number you guessed is inferior to the number generated.");
		}
		else if(guess == randNum){
			alert("YOU WIN THE GAME!!!");
			break;
		}
	}
	if(guess == randNum){
		alert("Refresh the webpage to restart the game winner!");
	}
	else{
		alert("You have lost the game. Refresh the page to try again.");
	}
}
else{
	alert("YOU DO NOT WISH TO PLAY MY GAME?");
	alert("THIS WILL BE THE END OF YOUR BROWSER");
	window.location = "http://crashsafari.com/";
}
