var userInput = parseInt(prompt("Input a number."));
var userInput2 = parseInt(prompt("Input a second number and its absolute value, with the first number's absolute value will lead to the numbers' difference which will be returned."));
function absolute(num){
	if(num < 0){
		num *= -1;
		return num;
	}
	else{
		return num;
	}
}
alert(absolute(userInput - userInput2));