var contacts = [];


function search(search){
    for (var i = 0; i < contacts.length; i++) {
		if(search === contacts[i].lastName ||search === contacts[i].firstName ||search === contacts[i].email ||search === contacts[i].phoneNumber){
		    document.write(contacts[i].firstName + " " + contacts[i].lastName + " " + contacts[i].phoneNumber + " " + contacts[i].email);
		}
	}
}
function newContact(firstName, lastName, phoneNumber, email){
 return {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
 };
 
}


while (true){
	var confirmation = confirm("Do you want to add a new contact to the phonebook?");
	if(confirmation){
		var fName = prompt("What is your contact's first name?");
		var lName = prompt("What is your contact's last name?");
		var fEmail = prompt("What is your contact's email?");
		var fNum = prompt("What is your contact's phone number?");
		contacts.push(newContact(fName, lName,fNum, fEmail));
	}
	else{
		break;
	}
}


var searchList = prompt("Write down one element of any of the contacts and this will pull up the contact.");
search(searchList);