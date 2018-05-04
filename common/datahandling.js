//Javascript for Household manager data management
//../htm/authorship.txt
/*TOC
The purpose of this document is to provide for all data validation,
 saving, and reading. Works with ./putForm.js

Sources
Variables
CLasses
  user
  organization
  task
Functions

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
/********variables******/
var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
var deldate = new Date(now.getTime()*3000);

/********************/
/********classes******/

class user {
  constructor(userName, userPass, userFName, userLName, userEm, userPh){
    this.userName = userName;
    this.userPass = userPass;
    this.userFName = userFName;
    this.userLName = userLName;
    this.userEm = userEm;
    this.userPh = userPh;
  }
}
class organization {
  constructor(orgName, orgPass, orgAddr, orgCity, orgSt, orgZip, orgEm, orgPh){
    this.orgName = orgName;
    this.orgPass = orgPass;
    this.orgAddr = orgAddr;
    this.orgCity = orgCity;
    this.orgSt = orgSt;
    this.orgZip = orgZip;
    this.orgEm = orgEm;
    this.orgPh = orgPh;
  }
}
class task {
  constructor(taskName, taskDue, taskComplete){
    this.taskName = taskName;
    this.taskDue = taskDue;
    this.taskComplete = taskComplete;
  }
}
/********************/
/********functions******/
/********************/
