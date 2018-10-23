const express = require("express")
const app = express()
const port = process.env.PORT || 8080; //port we will listen for connections on. 
// const mongoose = require("mongoose") //Library we will be using for connecting and manipulating mongoDB documents. 
const path = require("path") // Default Node library. 

//app. <type of request>(handler)
//we could use app.post for example, if we want to handle post requests. 
//please review the different http methods, and go to expressjs.com for more information

const staticdir = path.join(__dirname,"app","resources","static")
app.use(express.static(staticdir))


app.get("/",(req,res,next)=>{ //WHOA WHOA WHOA what is "/"... this just means that when you go to the root of the URL, it will be handled here. 


    //req = request object. Contains all the juicy data coming from the incoming client 
    //res = response object. Contains all the juicy data and methods we need to send a response to the client. 

    //Using path, we will navigate to our resources and public file. 
    let file = path.join(__dirname,"app","resources","html","datainput.html") //__dirname is a constant that is established, automatically provides the path to the current folder <THIS> Js file is in. 
    console.log(file)

    res.sendFile(file)
})

app.get("/staffpage",(req,res,next)=>{ //if you go to the URL, you can see that 
    
    //we don't have to send a file. We can just send text if we wish.
    let file = path.join(__dirname,"app","resources","html","staffpage.html") //__dirname is a constant that is established, automatically provides the path to the current folder <THIS> Js file is in. 

    res.sendFile(file)

})

app.get("/confirmpage",(req,res,next)=>{ //if you go to the URL, you can see that 
    
    //we don't have to send a file. We can just send text if we wish.
    let file = path.join(__dirname,"app","resources","html","confirmpage.html") //__dirname is a constant that is established, automatically provides the path to the current folder <THIS> Js file is in. 

    res.sendFile(file)

})

app.get("/jsondata",(req,res,next)=>{

    //we can send JSON data as a response as well. This is great for POST requests.

    res.json({name:"Testing",page:"None",state:false,number:100000})

})

app.get("*",(req,res,next)=>{ // * represents a wild card. Any pages that do not match the pages above will be handled here.
    
    //we don't have to send a file. We can just send text if we wish.

    res.send("Brother, this page does not exist.")

})
console.log("Server started on port " + port)
app.listen(port)
console.log("Webpage can be found at http://localhost:"+port)
console.log("Some testing web pages: \n http://localhost:"+port + " \n \t /secondpage \n \t /jsondata \n \t /anythingyouwant")
