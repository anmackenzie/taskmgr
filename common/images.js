//Javascript for Household manager images
//../htm/authorship.txt
/*TOC
The purpose of this document is to provide for dealing with creating,
storing, and modifying images.


Sources
Variables
regular expressions
Functions
*/

/********sources******/
/*
image
https://www.pexels.com/photo/yeah-printed-white-board-900102/

image is too bigger
https://www.w3schools.com/jsref/prop_img_width.asp

prepend innerHTML
https://stackoverflow.com/questions/22260836/innerhtml-prepend-text-instead-of-appending
*/
/********************/
/********variables******/

/********************/
/********functions******/
function logo(){
  var yeahLogo = new Image;
  yeahLogo.src = "./images/yeah.jpeg"
  var logo = document.getElementById("logo");
  logo.src = yeahLogo.src;
  logo.width = "100";
  logo.height = "100";
}
/********************/
