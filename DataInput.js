function sendData() {
  console.log("test");
}

function textBoxKeyPress(e) {
  e = e || window.event;
  if (e.keyCode != 13) return;
  
  //move info to table
  sendData();
}
