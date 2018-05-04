//Javascript for Household manager validation
//../htm/authorship.txt
/*TOC
The purpose of this document is to provide for all validation activities.
 Works with ./putForm.js

Sources
Variables
regular expressions
Functions
*/

/********sources******/
/*
"The test() method tests for match in string"
https://stackoverflow.com/a/17899144

select children by parent
https://stackoverflow.com/questions/9780443/how-to-select-all-children-of-an-element-with-javascript-and-change-css-property

put the children in an organized box
https://stackoverflow.com/a/10964175/4674553

*/
/********************/
/********variables******/

/********************/
/********regular expressions******/
var RegExpText = /^[A-Z a-z]+$/;
var RegExpAlphaNum = /^[A-Z a-z 0-9]+$/;
var RegExpSt = /^[A-Z]{2}$/;
var RegExpZip = /^[0-9]{5}$/;
var RegExpEmail = /^[A-Za-z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}){1}$/;

/********************/
/********functions******/
function val_data(name){
  console.log(name);
  var fields = Array.from(document.getElementById(name).getElementsByTagName("input"));

  fields.forEach(function(field){
    var name = field.name;
    var type = field.type;
    var value = field.value;

    if (type == "input"){
      if(!RegExpText.test(value) && value != ""){
        alert("Please enter valid text.");
        document.getElementsByName(name)[0].focus();
        document.getElementsByName(name)[0].select();
          }
      else {
        console.log("input validation success");
        //asigned value here
      }
    }
    else if(type == "password"){
      if(!RegExpAlphaNum.test(value)){
        alert("Please enter a valid password. No special characters.");
        document.getElementsByName(name)[0].focus();
        document.getElementsByName(name)[0].select();
      }
      else {
        console.log("password validation success");
      }
    }
    else if(type == "email")
    if(!RegExpEmail.test(value)){
      alert("Please enter a valid email.");
      document.getElementsByName(name)[0].focus();
      document.getElementsByName(name)[0].select();
    }
    else {
      console.log("email validation success");
    }
  });

}
/********************/
