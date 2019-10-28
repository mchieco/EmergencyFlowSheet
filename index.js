const express = require("express")
const app = express()
const port = process.env.PORT || 8080; //port we will listen for connections on. 
// const mongoose = require("mongoose") //Library we will be using for connecting and manipulating mongoDB documents. 
const path = require("path") // Default Node library. 

//app. <type of request>(handler)
//we could use app.post for example, if we want to handle post requests. 
//please review the different http methods, and go to expressjs.com for more information

const staticdir = path.join(__dirname, "app", "resources", "static")
app.use(express.static(staticdir))

app.get("/", require("./routes/rootserve"))

app.get("/confirmpage", require("./routes/confirmpage"));

app.get("*", (req, res, next) => { 
    res.send("Brother, this page does not exist.")
})
console.log("Server started on port " + port)
app.listen(port)
