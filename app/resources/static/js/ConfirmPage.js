//gets the info from the data input table
var notesConts = sessionStorage.getItem("strTable");
var rowCount = sessionStorage.getItem("tableRows");
var col1Data = sessionStorage.getItem("col1Cont");
var col2Data = sessionStorage.getItem("col2Cont");
var col3Data = sessionStorage.getItem("col3Cont");
var col4Data = sessionStorage.getItem("col4Cont");
var col5Data = sessionStorage.getItem("col5Cont");
var col6Data = sessionStorage.getItem("col6Cont");

//update info for code started and code finished
rowCount++;
rowCount++;
updateTime();
col1Data = col1Data + "--" + getCurrTime();
col2Data = col2Data + "--";
col3Data = col3Data + "--";
col4Data = col4Data + "--";
col5Data = col5Data + "--";
col6Data = col6Data + "--";
notesConts = notesConts + "--Code Finished";

//logs all the info
console.log("Rows: " + rowCount);
console.log("Time: " + col1Data);
console.log("rythm: " + col2Data);
console.log("medication: " + col3Data);
console.log("dose: " + col4Data);
console.log("airway: " + col5Data);
console.log("defib: " + col6Data);
console.log("notes: " + notesConts);

var i = 1;
//called when the page loads
document.addEventListener('DOMContentLoaded', function () {
  addRows(rowCount);
}, false);

//gets parameters from the url
function getParams() {
  var params = {};
  var param_array = window.location.href.split('?')[1].split('&');
  for (var i in param_array) {
    x = param_array[i].split('=');
    params[x[0]] = x[1];
  }
  return params;
};

//finds the text to add to each cell
function addText(conts, key) {
  var loc1 = 0;
  var loc2 = conts.indexOf("--");
  if (loc2 == -1) {
    var text = conts;
  } else {
    if (key == "one") {
      var text = col1Data.substring(loc1, loc2);

    } else if (key == "two") {
      var text = col2Data.substring(loc1, loc2);

    } else if (key == "three") {
      var text = col3Data.substring(loc1, loc2);

    } else if (key == "four") {
      var text = col4Data.substring(loc1, loc2);

    } else if (key == "five") {
      var text = col5Data.substring(loc1, loc2);

    } else if (key == "six") {
      var text = col6Data.substring(loc1, loc2);

    } else if (key == "seven") {
      var text = notesConts.substring(loc1, loc2);
    }
  }
  if (key == "one") {
    col1Data = col1Data.substring(loc2 + 2, col1Data.length);

  } else if (key == "two") {
    col2Data = col2Data.substring(loc2 + 2, col2Data.length);

  } else if (key == "three") {
    col3Data = col3Data.substring(loc2 + 2, col3Data.length);

  } else if (key == "four") {
    col4Data = col4Data.substring(loc2 + 2, col4Data.length);

  } else if (key == "five") {
    col5Data = col5Data.substring(loc2 + 2, col5Data.length);

  } else if (key == "six") {
    col6Data = col6Data.substring(loc2 + 2, col6Data.length);

  } else if (key == "seven") {
    notesConts = notesConts.substring(loc2 + 2, notesConts.length);
  }
  return text;
}

//adds the rows to the table and each cell
function addRows(amount) {
  for (x = 0; x < amount; x++) {
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

    //removes the first -- and sets it to a var
    if (i == 1) {
      var oneText = addText(col1Data, "one");
      var twoText = addText(col2Data, "two");
      var threeText = addText(col3Data, "three");
      var fourText = addText(col4Data, "four");
      var fiveText = addText(col5Data, "five");
      var sixText = addText(col6Data, "six");
      var sevenText = addText(notesConts, "seven");
    }

    //removes text and saves it to var
    var oneText = addText(col1Data, "one");
    var twoText = addText(col2Data, "two");
    var threeText = addText(col3Data, "three");
    var fourText = addText(col4Data, "four");
    var fiveText = addText(col5Data, "five");
    var sixText = addText(col6Data, "six");
    var sevenText = addText(notesConts, "seven");

    //sets the cells to the text
    cell1.innerHTML = oneText;
    cell2.innerHTML = twoText;
    cell3.innerHTML = threeText;
    cell4.innerHTML = fourText;
    cell5.innerHTML = fiveText;
    cell6.innerHTML = sixText;
    cell7.innerHTML = sevenText;

    //moves to the next row
    i++;

  }

  //keeps from submitting form
  return false;
};

function onSubmit() {
  sessionStorage.setItem("MDName", document.getElementById("MD").value);
  sessionStorage.setItem("Anesthesiologist", document.getElementById("Anesthesiologist").value);
  sessionStorage.setItem("RecNurse", document.getElementById("RecNurse").value);
  sessionStorage.setItem("MedPrep", document.getElementById("MedPrep").value);
  sessionStorage.setItem("Other", document.getElementById("Other").value);
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
