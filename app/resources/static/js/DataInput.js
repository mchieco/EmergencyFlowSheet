//adds the code started info
var strTable = "--Code Started";
updateTime();
var col1Cont = "--" + getCurrTime();
var col2Cont = "--";
var col3Cont = "--";
var col4Cont = "--";
var col5Cont = "--";
var col6Cont = "--";

//sets the number of rows
var tableRows = 0;

//detects enter key presses
function enterKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13 || event.which == 13) {
    var inputBtn = document.getElementById("input_box");
    textBoxKeyPress();
    return false;
  } else {
    return true;
  }
}

function formKeyPress(e) {
  if (e.keyCode == 13 || event.which == 13) {
    e.preventDefault();
  }
}

function validateButton(type) {
  if (type.selectedIndex == 0) {
    var selectedText = type.options[type.selectedIndex].text;
    return true;
  } else {
    var selectedText = type.options[type.selectedIndex].text;
    return true;
  }
}

//add button functionality
function textBoxKeyPress() {
  updateDate();
  updateTime();
  //move info to table
  var textBox = document.getElementById('input_box');
  var table = document.getElementById("datatable");
  var i = 1;
  // add a new row
  var row = table.insertRow(i);
  // add a cell to row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  // add info to cells
  cell1.innerHTML = getCurrTime();
  col1Cont = col1Cont + setNotes(getCurrTime());

  // input into rythm
  var rythm = document.getElementById("rythmType");
  if (validateButton(rythm) == false) {
    return false;
  }
  cell2.innerHTML = rythm.options[rythm.selectedIndex].text;
  col2Cont = col2Cont + setNotes(rythm.options[rythm.selectedIndex].text);

  // input into meds
  var meds = document.getElementById("medicationType");
  if (validateButton(meds) == false) {
    return false;
  }
  cell3.innerHTML = meds.options[meds.selectedIndex].text;
  col3Cont = col3Cont + setNotes(meds.options[meds.selectedIndex].text);

  // input into dose
  var dose = document.getElementById("doseType");
  if (validateButton(dose) == false) {
    return false;
  }
  cell4.innerHTML = dose.options[dose.selectedIndex].text;
  col4Cont = col4Cont + setNotes(dose.options[dose.selectedIndex].text);

  // input into iv
  var iv = document.getElementById("airway");
  if (validateButton(iv) == false) {
    return false;
  }
  cell5.innerHTML = iv.options[iv.selectedIndex].text;
  col5Cont = col5Cont + setNotes(iv.options[iv.selectedIndex].text);

  // input into defib joules
  var shock = document.getElementById("shockType");
  if (validateButton(shock) == false) {
    return false;
  }
  cell6.innerHTML = shock.options[shock.selectedIndex].text;
  col6Cont = col6Cont + setNotes(shock.options[shock.selectedIndex].text);

  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";

  cell7.innerHTML = text;

  strTable = strTable + setNotes(text);

  //adds a row
  tableRows++;

  //keeps from submitting form
  return false;
};

//adds the key to indicate the next row was started
function setNotes(text) {
  return "--" + text;
}

//sets the current date and time
var currentdate = new Date();
var currDate = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
var currTime;
if (currentdate.getMinutes() < 10) {
  currTime = currentdate.getHours() + ":0" + currentdate.getMinutes();
} else {
  currTime = currentdate.getHours() + ":" + currentdate.getMinutes();
}

//updates the time
function updateTime() {
  currentdate = new Date();
  if (currentdate.getMinutes() < 10) {
    currTime = currentdate.getHours() + ":0" + currentdate.getMinutes();
  } else {
    currTime = currentdate.getHours() + ":" + currentdate.getMinutes();
  }
}

//updates the date
function updateDate() {
  currentdate = new Date();
  currDate = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
}

//gets the date
function getCurrDate() {
  return currDate;
}

//sets the time
function getCurrTime() {
  return currTime;
}

//reset button functionality
function ResetButton() {
  var dropDown = document.getElementById("rythmType");
  dropDown.selectedIndex = 0;
  var dropDown = document.getElementById("medicationType");
  dropDown.selectedIndex = 0;
  var dropDown = document.getElementById("doseType");
  dropDown.selectedIndex = 0;
  var dropDown = document.getElementById("airway");
  dropDown.selectedIndex = 0;
  var dropDown = document.getElementById("shockType");
  dropDown.selectedIndex = 0;
}

//start compression functionality
function startCompressions() {

  addEmptyCells("Compressions Started");

  //keeps from submitting form
  return false;
};

//end compression button functionality
function endCompressions() {

  addEmptyCells("Compressions Ended");

  //keeps from submitting form
  return false;
};

//start IV button functionality
function startIV() {

  addEmptyCells("IV Started");


  //keeps from submitting form
  return false;
};

//end IV button functionality
function endIV() {

  addEmptyCells("IV Ended");

  //keeps from submitting form
  return false;
};

//adds the empty cells and the text depending on which button was clicked
function addEmptyCells(text) {
  updateTime();
  //move info to table
  var textBox = document.getElementById('input_box');
  var table = document.getElementById("datatable");
  var i = 1;
  // add a new row
  var row = table.insertRow(i);
  // add a cell to row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  cell1.innerHTML = getCurrTime();
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = text;

  col1Cont = col1Cont + setNotes(getCurrTime());
  col2Cont = col2Cont + setNotes(" ");
  col3Cont = col3Cont + setNotes(" ");
  col4Cont = col4Cont + setNotes(" ");
  col5Cont = col5Cont + setNotes(" ");
  col6Cont = col6Cont + setNotes(" ");
  strTable = strTable + setNotes(text);
  tableRows++;
}

//sends the info in session storage
function onSubmit() {
  sessionStorage.setItem('col1Cont', col1Cont);
  sessionStorage.setItem('col2Cont', col2Cont);
  sessionStorage.setItem('col3Cont', col3Cont);
  sessionStorage.setItem('col4Cont', col4Cont);
  sessionStorage.setItem('col5Cont', col5Cont);
  sessionStorage.setItem('col6Cont', col6Cont);
  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  sessionStorage.setItem("allergies", document.getElementById("allergies").value)
}
