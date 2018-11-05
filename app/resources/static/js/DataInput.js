var strTable = "";
var tableRows = 0;

function enterKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    console.log("HI");
    textBoxKeyPress();
    //keeps from submitting form
    return false;
  }
}

function validateButton(type) {
  if (type.selectedIndex == 0) {
    alert('select one answer');
    return false;
  } else {
    var selectedText = type.options[type.selectedIndex].text;
    console.log(selectedText);
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

  // input into rythm
  var rythm = document.getElementById("rythmType");
  if(validateButton(rythm) == false){
    return false;
  }
  cell2.innerHTML = rythm.options[rythm.selectedIndex].text;

  // input into meds
  var meds = document.getElementById("medicationType");
  if(validateButton(meds) == false){
    return false;
  }
  cell3.innerHTML = meds.options[meds.selectedIndex].text;

  // input into dose
  var dose = document.getElementById("doseType");
  if (validateButton(dose) == false) {
    return false;
  }
  cell4.innerHTML = dose.options[dose.selectedIndex].text;

  // input into iv
  var iv = document.getElementById("ivType");
  if (validateButton(iv) == false) {
    return false;
  }
  cell5.innerHTML = iv.options[iv.selectedIndex].text;

  // input into defib joules
  var shock = document.getElementById("shockType");
  if (validateButton(shock) == false) {
    return false;
  }
  cell6.innerHTML = shock.options[shock.selectedIndex].text;

  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";

  cell7.innerHTML = text;

  if(strTable != ""){
    strTable = strTable + "-" + text;
  } else{
    strTable = text;
  }
  console.log(strTable);

  tableRows++;

  sessionStorage.setItem('strTable', strTable);
  sessionStorage.setItem('tableRows', tableRows);
  //keeps from submitting form
  return false;
};

function setNotes(text) {

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
