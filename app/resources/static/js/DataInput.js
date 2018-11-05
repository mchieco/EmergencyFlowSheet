var strTable = "";
var col1Cont = "";
var col2Cont = "";
var col3Cont = "";
var col4Cont = "";
var col5Cont = "";
var col6Cont = "";

var tableRows = 0;

function enterKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    textBoxKeyPress();
    //keeps from submitting form
    return false;
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
  col1Cont = col1Cont + setNotes(col1Cont, getCurrTime());
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  var rythm = document.getElementById("rythmType");
  if(validateButton(rythm) == false){
    return false;
  }
  cell2.innerHTML = rythm.options[rythm.selectedIndex].text;
  col2Cont = col2Cont + setNotes(col2Cont, rythm.options[rythm.selectedIndex].text);
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  var meds = document.getElementById("medicationType");
  if(validateButton(meds) == false){
    return false;
  }
  cell3.innerHTML = meds.options[meds.selectedIndex].text;
  col3Cont = col3Cont + setNotes(col3Cont, meds.options[meds.selectedIndex].text);
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  var dose = document.getElementById("doseType");
  if (validateButton(dose) == false) {
    return false;
  }
  cell4.innerHTML = dose.options[dose.selectedIndex].text;
  col4Cont = col4Cont + setNotes(col4Cont, dose.options[dose.selectedIndex].text);
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  var iv = document.getElementById("ivType");
  if (validateButton(iv) == false) {
    return false;
  }
  cell5.innerHTML = iv.options[iv.selectedIndex].text;
  col5Cont = col5Cont + setNotes(col5Cont, iv.options[iv.selectedIndex].text);
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  var shock = document.getElementById("shockType");
  if (validateButton(shock) == false) {
    return false;
  }
  cell6.innerHTML = shock.options[shock.selectedIndex].text;
  col6Cont = col6Cont + setNotes(col6Cont, shock.options[shock.selectedIndex].text);
  sessionStorage.setItem('col6Cont', col6Cont);

  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";

  cell7.innerHTML = text;

  strTable = strTable + setNotes(strTable, text);

  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function setNotes(loc, text) {
  if(loc != ""){
    return "--" + text;
  } else{
    return text;
  }
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
  sessionStorage.setItem("MR", document.getElementById("MR").value);
  sessionStorage.setItem("location", document.getElementById("Location").value);
}
