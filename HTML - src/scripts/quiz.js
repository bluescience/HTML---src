var confirmation = confirm("Hello, and welcome to my game. Here you will be quizzed 5 questions and based on your performance, be assigned a score. Would you like to start?");
var counter = 0;

var num1;
var num2;
var num3;
var num4;
var num5;

if (confirmation){
	for(var j = 1; j < 6; j++){
		var randNum = Math.floor(Math.random() * 5 + 1);
		while(randNum === num1 || randNum === num2 || randNum === num3 || randNum === num4 || randNum === num5){
			randNum++;
			if(randNum > 5){
				randNum = 1;
			}
		}
		if(randNum === 1){
			var que1 = prompt("What is the capital of California?", "Please write answer here.");
			if(que1.toUpperCase() === "SACRAMENTO"){
				counter++;
				alert("You are correct.");
			}
			else{
				alert("You are wrong.");
				}
		}
		else if(randNum === 2){
			var que2 = prompt("What does 11 in binary, mean in base 10?", "Please write answer here.");
			if(que2.toUpperCase() === "3"){
				counter++;
				alert("You are correct.");
			}
			else{
				alert("You are wrong.");
			}
		}
		else if(randNum === 3){
			var que3 = prompt("What is the country with the largest population in the world?", "Please write answer here.");
			if(que3.toUpperCase() === "CHINA"){
				counter++;
				alert("You are correct.");
			}
			else{
				alert("You are wrong.");
			}
		}
		else if(randNum === 4){
			var que4 = prompt("What is 2 + 2", "Please write answer here.");
			if(que4.toUpperCase() === "4"){
				counter++;
				alert("You are correct.");
			}
			else{
				alert("You are wrong.");
			}
		}
		else if(randNum === 5){
			var que5 = prompt("What is the holy city to the three largest abrahamic religions of the world?", "Please write answer here.");
			if(que5.toUpperCase() === "JERUSALEM"){
				counter++;
				alert("You are correct.");
			}
			else{
				alert("You are wrong.");
			}
		}
		if(j === 1){
			num1 = randNum;
		}
		else if(j === 2){
			num2 = randNum;
		}
		else if(j === 3){
			num3 = randNum;
		}
		else if(j === 4){
			num4 = randNum;
		}
		else if(j === 5){
			num5 = randNum;
		}
	
	}
	if(counter === 5){
		alert("You have a Gold Medal!");
	}
	else if(counter === 3 || counter === 4){
		alert("You have gotten a silver medal.");
	} 
	else if(counter === 2 || counter === 1){
		alert("You have gotten a bronze medal.");
	}
	else{
		alert("You have won nothing.");
	}
	alert(counter * 20 + "% of your questions are correct.");
}
	else{
		alert("Alright, since you refused to play my game, I will crash your browser.");
		for(var i = 100 ; i > 99; i++){
			alert("*Queue evil laugh*");
		}
	}