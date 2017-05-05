var text = "";
var possible = "abcdefghijklmnopqrstuvwxyz";

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

function makeid()
{
    for( var i=0; i < num; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    alert(text);
}

alert("After clicking of, I will give you a randomly generated string of characters. You must write its reverse in the input box below");
var num = parseInt(prompt(" How many characters do you want in your string? "));
makeid();
var textArray = text.split("");
//alert("textArray = " + textArray);
var reverseArray = [];
for(var j = 0; j < textArray.length; j++){
	reverseArray.unshift(textArray[j]);
}
var reverse = "";
for(var k = 0; k < reverseArray.length; k++){
	reverse += reverseArray[k];
}
setTimeout(test, 10000);