var currentdate = new Date();
var datetime = (currentdate.getMonth()+1) + "/"
+ currentdate.getDate()  + "/"
+ currentdate.getFullYear() + " @ "
+ currentdate.getHours() + ":"
+ currentdate.getMinutes() + ":"
+ currentdate.getSeconds();

function getCurrDate(){
                console.log(datetime)
                return datetime;
}
