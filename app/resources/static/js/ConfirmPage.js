var notesConts = sessionStorage.getItem("strTable");
var rowCount = sessionStorage.getItem("tableRows");
var col1Data = sessionStorage.getItem("col1Cont");
var col2Data = sessionStorage.getItem("col2Cont");
var col3Data = sessionStorage.getItem("col3Cont");
var col4Data = sessionStorage.getItem("col4Cont");
var col5Data = sessionStorage.getItem("col5Cont");
var col6Data = sessionStorage.getItem("col6Cont");


console.log(col2Data);
console.log(col3Data);
console.log(col4Data);
console.log(col5Data);
console.log(col6Data);


var i = 1;
var conts = "";

document.addEventListener('DOMContentLoaded', function() {
  addRows(rowCount);
}, false);

function getParams(){
  var params = {};
  var param_array = window.location.href.split('?')[1].split('&');
  for(var i in param_array){
    x = param_array[i].split('=');
    params[x[0]] = x[1];
  }
  return params;
};

function getText(conts){
  var loc1 = 0;
  var loc2 = conts.indexOf("--");
  if(loc2 == -1){
    var str = conts;
  } else {
    var str = conts.substring(loc1, loc2);
  }
  console.log("pre " + conts);
  conts = conts.substring(loc2+2, conts.length);
  console.log("post " + conts);
  console.log("str " + str);
  return str;
};

function addRows(amount) {

  //move info to table
  var completeTable = document.getElementById('data');
  // add a new row
  var row = completeTable.insertRow(i);
  // add a cell to row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  // add info to cells
  i++;
  amount--;
  //removes text and saves it to var
  var text = getText(notesConts);

  cell7.innerHTML = text;
  cell1.innerHTML = "-";
  cell2.innerHTML = "-";
  cell3.innerHTML = "-";
  cell4.innerHTML = "-";
  cell5.innerHTML = "-";
  cell6.innerHTML = "-";

  if(amount > 0) {
    addRows(amount);
  }
  //keeps from submitting form
  return false;
};
