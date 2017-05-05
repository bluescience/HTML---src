/*alert("Input a series of names and they will be arranged in alphabetical order");
var nameArray = []; 
var name;
var counter = 0;
//var secArray;
//var testArray; 
while (true){
	name = prompt("Input a name. Input STOP to stop.");
	if(name.toUpperCase() === "STOP"){
		break;
	}
	nameArray.push(name);
	counter++;
}
nameArray.sort();
for(var i = 0; i < counter; i++){
	document.write("<p>" +nameArray[i]+ "</p>");
}
*/
function test() {
	var kek = document.getElementById("kek");
	if (kek.value == reverse) {
    alert("you win!");
	}
	else {
	alert("you lose :(");
	alert("The correct answer was " +reverse);
	}
}
var word = prompt("Input a word and I will give it back to you backwards.");
var wordArray = word.split("");
var reverseArray = [];
for (var i = wordArray.length - 1; i >= 0; i--){
	reverseArray.push(wordArray[i]);
}
reverse = "";
for(var j = 0; j < reverseArray.length ; j++){
	reverse += reverseArray[j];
}
document.write('<input id="kek" class="input" type="text" value="">');
alert("Plot twist! You now have to guess the word backwards and I will tell you whether or not you are wrong. You have ten seconds. Write it in the big black box. REMEMBER: this is case-sensitive!")

setTimeout(test, 10000);

