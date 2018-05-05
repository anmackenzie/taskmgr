//Javascript for Household manager login
//../htm/authorship.txt
/*TOC
The purpose of this document is to provide for all login activities. Works with ./putForm.js

Sources
Variables
Functions
	onClickLogin
	onClickRegister
	writeOut
*/
/********sources******/
/*
appending to innerHTML (not used)
https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list
bigger storage (not cookies - probably for use as hacky flatfile db until real solution is implemented)
https://www.w3schools.com/html/html5_webstorage.asp

Matt Harrison:
//copy and paste this on to every function
/*	Purpose:
 *		Pre:
 *		Post:
 */
/********************/
/*******variables*********/
//make an array to loop over with typical login/registration fields

//User specific form fields for Login and Registration
//for login, only loop to [3], for registration use .forEach
var userFormFields = [
	new FormField("orgName","Organization Name", "input", 20),
	new FormField("orgPass", "Organization Password", "input", 20),
	new FormField("userName", "Username", "input", 20),
	new FormField("userPass", "Password", "password", 40),
	new FormField("userFName", "First Name", "input", 20),
	new FormField("userLName", "Last Name", "input", 20),
	new FormField("userEm", "Email", "email"),
	new FormField("userPh", "Phone", "tel")
]

var orgFormFields = [
	new FormField("orgName", "Organization Name", "input", 20),
	new FormField("orgPass", "Organization Password", "password", 40),
	new FormField("orgAddr", "Address", "input", 40),
	new FormField("orgCity", "City", "input", 40),
	new FormField("orgSt", "State", "select"),
	new FormField("orgZip", "Zip", "number"),
	new FormField("orgEm", "Organization Email", "email"),
	new FormField("orgPh", "Organziation Phone",  "tel")
]

//will reflect how many times the buttons have been pressed
//eventually, replace with static members of their respective functions
var logsNum = 1;
var regsNum = 1;
var orgsNum = 1;

/*******functions*********/
function onClickLogin(){
	/*	Purpose:present login fields
	 *		Pre:Login Selected
	 *		Post:prevent multiple sessions with same browser
	TODO: some method of unsetting logsNum other than refreshing the login page.
	 use sessionStorage
	 */
	if (logsNum == 1 && regsNum == 1){
		writeStartForm('log','log','Login','dashboard.php');
		var tables = document.getElementsByTagName("table");
		for (i=0; i < 4; i++){
			tables[logsNum-1].innerHTML += userFormFields[i].writeNameField();
		}
		writeEndForm(logsNum);
		logsNum++;
	}
	else{
		alert("Only one person may log in at a time. You cannot login and register.");
	}
}

function onClickRegister(){
	/*	Purpose:write out user registration, and possibly organization registration.
	 *		Pre:Register selected.
	 *		Post:
	 */
//Acquire target to write to document
	 var tables = document.getElementsByTagName("table");

		if(logsNum == 1 && orgsNum == 1){
			var regFormNum = 'regForm'+regsNum;// uniquely identify form
			writeStartForm(regFormNum,regFormNum,'User Registration '+regsNum,'dashboard.php');
			//write all the registration fields using their method
			userFormFields.forEach(function(field){
				tables[regsNum-1].innerHTML += field.writeNameField();
			});
			//userFormFields.forEach(tables[regsNum-1].innerHTML += .writeNameField;
			writeEndForm(regsNum);
			regsNum++;
	}
	else{
		alert("You have to log in or register, not both at once.");
	}
}
function onClickRegisterOrg(){
	/*	Purpose:write out possibly organization registration.
	 *		Pre:New Organization selected.
	 *		Post:
	 */
//target to write to document
var tables = document.getElementsByTagName("table");

	if(regsNum == 1 && logsNum == 1){
		var orgFormNum = 'orgForm'+orgsNum; //uniquely identify forms

		writeStartForm(orgFormNum,orgFormNum,'Organization Registration '+orgsNum,'dashboard.php');
			//write all the registration fields using their method
			orgFormFields.forEach(function(field){
				tables[regsNum-1].innerHTML += field.writeNameField();
			});
			writeEndForm(orgsNum);
			 orgsNum++;
	}
	else{
		alert("You can only take one type of action at once.")
	}
}
