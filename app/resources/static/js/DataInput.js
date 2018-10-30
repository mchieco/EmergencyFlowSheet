function sendData() {
  console.log("test");
}

function textBoxKeyPress(e) {
  e = e || window.event;
  if (e.keyCode != 13) return;

  //move info to table
  var textBox = document.getElementById('text_box');
  //removes text and saves it to var
  var text = textBox.value.replace(/\n/, '');
  textBox.value = "";
  console.log(text);
  sendData();

  //keeps from submitting form
  return false;
}

var currentdate = new Date();
var currDate = (currentdate.getMonth()+1) + "/"+ currentdate.getDate()  + "/" + currentdate.getFullYear();
var currTime = currentdate.getHours() + ":"+ currentdate.getMinutes();

function getCurrDate(){
  return currDate;
}

function getCurrTime(){
  return currTime;
}
