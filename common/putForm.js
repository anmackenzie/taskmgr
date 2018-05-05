//Javascript for Household manager place form elements
//../htm/authorship.txt
/*TOC
The purpose of this file is to automate placing of form elements on the page the function was called from.
Sources
Constants
Variables
Classes
	FormField
		Name
Functions
	startForm
	endForm
*/

/********sources******/
/*

bigger storage (not cookies - probably for use as hacky flatfile db until real solution is implemented)
https://www.w3schools.com/html/html5_webstorage.asp

how do i do classes?
https://www.w3schools.com/js/js_objects.asp
how do i do the static
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Matt Harrison:
//copy and paste this on to every function
/*	Purpose:
 *		Pre:
 *		Post:
 */
/********************/
/********constants******/
//because I don't want to type these all the time

const INPUT_START = "<tr>      	<td class='labels'>";
const INPUT_MID = "</td>    <td> <input type='";
const INPUT_END ="'></td>        </tr>";

/********************/
/*******variables*********/

/********************/
/*******Classes*********/
class FormField {
	constructor(name, label, type, size=0, value=""){
		this.name = name;
		this.label = label;
		this.type = type;
		this.size = size;
		this.value = value;
	}
 writeNameField(){
		/*	Purpose:write fields which will take name data
	 *		Pre: helper function. called by helper functions
	 n - name of field (automatically generated)
	 s - human readable name (string).
	 post: returns string to write a form field
	 */

		var nameFieldContents = INPUT_START + this.label + INPUT_MID + this.type ;
		nameFieldContents += "' name='" + this.name + INPUT_END;
		return nameFieldContents;
	}

}
/********************/
/*******functions*********/
function writeStartForm(name, id, label, action){
/*	Purpose: write the beginning of a form out to the document.
 *		Pre: helper function. Called by functions like writeOut (login.js)
		Param: name of form,label of form, id of form. later may also take
		document.target.
 *		Post: form and table are opened and labelled.
 known issue: form is closed, then form elements are written out.
 workaround: form elements written to child element of form
 */
	var tableFormStart = "	<form name='" + name + "' id='"+ id + "' action='";
	tableFormStart += action +"' onsubmit='return val_data(\"" + name + "\")' method='post' >";
	tableFormStart += "<table>	<thead>	<tr> <td colspan='2'>";
	tableFormStart += "<h1>" + label +"</h1></td></tr></thead><tbody>";
	document.getElementById("target").innerHTML += tableFormStart;
}

function writeEndForm(num){
	/*	Purpose: write the end of a form out to the document.
	 *		Pre: helper function. Called by functions like writeOut (login.js)
			Param: num uniquely identifies submit and clear buttons
			to prevent interference with other forms on the page.
	 *		Post: form and table are closed.
	 */
	var i = num-1;
	var tableFormEnd = "        <tr>        	<td colspan='2'>            	<input type='submit' name='s";
	tableFormEnd += num;
	tableFormEnd += "' value='Send Data'>            	<input type='reset' name='r";
	tableFormEnd += num;
	tableFormEnd += "' value='Clear Data'>           </td>        </tr></tbody> 	</table>    </form>";

	document.getElementsByTagName("table")[i].innerHTML += tableFormEnd;

}
