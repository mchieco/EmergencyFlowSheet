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
  if (e.keyCode == 13 || event.which == 13) {
    var inputBtn = document.getElementById("input_box");
    textBoxKeyPress();
    return false;
  } else {
    return true;
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
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  var rythm = document.getElementById("rythmType");
  if (validateButton(rythm) == false) {
    return false;
  }
  cell2.innerHTML = rythm.options[rythm.selectedIndex].text;
  col2Cont = col2Cont + setNotes(rythm.options[rythm.selectedIndex].text);
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  var meds = document.getElementById("medicationType");
  if (validateButton(meds) == false) {
    return false;
  }
  cell3.innerHTML = meds.options[meds.selectedIndex].text;
  col3Cont = col3Cont + setNotes(meds.options[meds.selectedIndex].text);
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  var dose = document.getElementById("doseType");
  if (validateButton(dose) == false) {
    return false;
  }
  cell4.innerHTML = dose.options[dose.selectedIndex].text;
  col4Cont = col4Cont + setNotes(dose.options[dose.selectedIndex].text);
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  var iv = document.getElementById("airway");
  if (validateButton(iv) == false) {
    return false;
  }
  cell5.innerHTML = iv.options[iv.selectedIndex].text;
  col5Cont = col5Cont + setNotes(iv.options[iv.selectedIndex].text);
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  var shock = document.getElementById("shockType");
  if (validateButton(shock) == false) {
    return false;
  }
  cell6.innerHTML = shock.options[shock.selectedIndex].text;
  col6Cont = col6Cont + setNotes(shock.options[shock.selectedIndex].text);
  sessionStorage.setItem('col6Cont', col6Cont);

  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";

  cell7.innerHTML = text;

  strTable = strTable + setNotes(text);

  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function setNotes(text) {
  // if (loc != "") {
  return "--" + text;
  // } else {
  //   return text;
  // }
}

var currentdate = new Date();
var currDate = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
var currTime;
if (currentdate.getMinutes() < 10) {
  currTime = currentdate.getHours() + ":0" + currentdate.getMinutes();
} else {
  currTime = currentdate.getHours() + ":" + currentdate.getMinutes();
}

function updateTime() {
  currentdate = new Date();
  if (currentdate.getMinutes() < 10) {
    currTime = currentdate.getHours() + ":0" + currentdate.getMinutes();
  } else {
    currTime = currentdate.getHours() + ":" + currentdate.getMinutes();
  }
}

function updateDate() {
  currentdate = new Date();
  currDate = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();
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
  sessionStorage.setItem("patientAllergies", document.getElementById("allergies").value);
}

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

function startCompressions() {
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
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  cell2.innerHTML = " ";
  col2Cont = col2Cont + setNotes(" ");
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  cell3.innerHTML = " ";
  col3Cont = col3Cont + setNotes(" ");
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  cell4.innerHTML = " ";
  col4Cont = col4Cont + setNotes(" ");
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  cell5.innerHTML = "";
  col5Cont = col5Cont + setNotes(" ");
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  cell6.innerHTML = " ";
  col6Cont = col6Cont + setNotes(" ");
  sessionStorage.setItem('col6Cont', col6Cont);
  text = "Compressions Started";
  cell7.innerHTML = text;
  strTable = strTable + setNotes(text);

  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function endCompressions() {
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
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  cell2.innerHTML = " ";
  col2Cont = col2Cont + setNotes(" ");
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  cell3.innerHTML = " ";
  col3Cont = col3Cont + setNotes(" ");
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  cell4.innerHTML = " ";
  col4Cont = col4Cont + setNotes(" ");
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  cell5.innerHTML = "";
  col5Cont = col5Cont + setNotes(" ");
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  cell6.innerHTML = " ";
  col6Cont = col6Cont + setNotes(" ");
  sessionStorage.setItem('col6Cont', col6Cont);

  text = "Compressions Ended";
  cell7.innerHTML = text;
  strTable = strTable + setNotes(text);
  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function startIV() {
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
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  cell2.innerHTML = " ";
  col2Cont = col2Cont + setNotes(" ");
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  cell3.innerHTML = " ";
  col3Cont = col3Cont + setNotes(" ");
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  cell4.innerHTML = " ";
  col4Cont = col4Cont + setNotes(" ");
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  cell5.innerHTML = "";
  col5Cont = col5Cont + setNotes(" ");
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  cell6.innerHTML = " ";
  col6Cont = col6Cont + setNotes(" ");
  sessionStorage.setItem('col6Cont', col6Cont);

  text = "IV Started";
  cell7.innerHTML = text;
  strTable = strTable + setNotes(text);
  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function endIV() {
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
  sessionStorage.setItem('col1Cont', col1Cont);

  // input into rythm
  cell2.innerHTML = " ";
  col2Cont = col2Cont + setNotes(" ");
  sessionStorage.setItem('col2Cont', col2Cont);

  // input into meds
  cell3.innerHTML = " ";
  col3Cont = col3Cont + setNotes(" ");
  sessionStorage.setItem('col3Cont', col3Cont);

  // input into dose
  cell4.innerHTML = " ";
  col4Cont = col4Cont + setNotes(" ");
  sessionStorage.setItem('col4Cont', col4Cont);

  // input into iv
  cell5.innerHTML = "";
  col5Cont = col5Cont + setNotes(" ");
  sessionStorage.setItem('col5Cont', col5Cont);

  // input into defib joules
  cell6.innerHTML = " ";
  col6Cont = col6Cont + setNotes(" ");
  sessionStorage.setItem('col6Cont', col6Cont);

  text = "IV Ended";
  cell7.innerHTML = text;
  strTable = strTable + setNotes(text);
  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};
