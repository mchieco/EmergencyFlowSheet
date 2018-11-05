var notesConts = sessionStorage.getItem("strTable");
var rowCount = sessionStorage.getItem("tableRows");
var col1Data = sessionStorage.getItem("col1Cont");
var col2Data = sessionStorage.getItem("col2Cont");
var col3Data = sessionStorage.getItem("col3Cont");
var col4Data = sessionStorage.getItem("col4Cont");
var col5Data = sessionStorage.getItem("col5Cont");
var col6Data = sessionStorage.getItem("col6Cont");

console.log(col1Data);
console.log(col2Data);
console.log(col3Data);
console.log(col4Data);
console.log(col5Data);
console.log(col6Data);

var i = 1;

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

function addText(conts, key){
  var loc1 = 0;
  var loc2 = conts.indexOf("--");
  if(loc2 == -1){
    var text = conts;
  } else {
    if(key == "one") {
      var text = col1Data.substring(loc1, loc2);

    } else if(key == "two") {
      var text = col2Data.substring(loc1, loc2);

    } else if(key == "three") {
      var text = col3Data.substring(loc1, loc2);

    } else if(key == "four") {
      var text = col4Data.substring(loc1, loc2);

    } else if(key == "five") {
      var text = col5Data.substring(loc1, loc2);

    } else if(key == "six") {
      var text = col6Data.substring(loc1, loc2);

    } else if(key == "seven") {
      var text = notesConts.substring(loc1, loc2);
    }
  }
  if(key == "one") {
    col1Data = col1Data.substring(loc2+2, col1Data.length);

  } else if(key == "two") {
    col2Data = col2Data.substring(loc2+2, col2Data.length);

  } else if(key == "three") {
    col3Data = col3Data.substring(loc2+2, col3Data.length);

  } else if(key == "four") {
    col4Data = col4Data.substring(loc2+2, col4Data.length);

  } else if(key == "five") {
    col5Data = col5Data.substring(loc2+2, col5Data.length);

  } else if(key == "six") {
    col6Data = col6Data.substring(loc2+2, col6Data.length);

  } else if(key == "seven") {
    notesConts = notesConts.substring(loc2+2, notesConts.length);
  }
  return text;
}

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
  // var loc1 = 0;
  // var loc2 = notesConts.indexOf("--");
  // if(loc2 == -1){
  //   var text = notesConts;
  // } else {
  //   var text = notesConts.substring(loc1, loc2);
  // }
  // console.log("pre " + notesConts);
  // notesConts = notesConts.substring(loc2+2, notesConts.length);
  // console.log("post " + notesConts);
  // console.log("str " + text);

  var oneText = addText(col1Data, "one");
  var twoText = addText(col2Data, "two");
  var threeText = addText(col3Data, "three");
  var fourText = addText(col4Data, "four");
  var fiveText = addText(col5Data, "five");
  var sixText = addText(col6Data, "six");
  var sevenText = addText(notesConts, "seven");



  cell7.innerHTML = sevenText;
  cell1.innerHTML = oneText;
  cell2.innerHTML = twoText;
  cell3.innerHTML = threeText;
  cell4.innerHTML = fourText;
  cell5.innerHTML = fiveText;
  cell6.innerHTML = sixText;

  if(amount > 0) {
    addRows(amount);
  }
  //keeps from submitting form
  return false;
};
