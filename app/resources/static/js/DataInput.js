function enterKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    console.log("HI");
    textBoxKeyPress();
  }
}

function textBoxKeyPress() {

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
  i++;
  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";

  cell7.innerHTML = text;

  sendData(text);

  //keeps from submitting form
  return false;
}

function setNotes(text) {

}

function sendData(text) {
  console.log(text);
}


var currentdate = new Date();
var currDate = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
var currTime;
if (currentdate.getMinutes() < 10) {
  currTime = currentdate.getHours() + ":0" + currentdate.getMinutes();
} else {
  currTime = currentdate.getHours() + ":" + currentdate.getMinutes();
}


function getCurrDate() {
  return currDate;
}

function getCurrTime() {
  return currTime;
}

function onSubmit() {
  sessionStorage.setItem("patientName", document.getElementById("pName").value);
  sessionStorage.setItem("MR", document.getElementById("MR#").value);
  sessionStorage.setItem("location", document.getElementById("Location").value);
}
