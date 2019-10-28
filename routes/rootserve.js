/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {*} next 
 */
let controller = function(req,res,next){
    
    //req = request object. Contains all the juicy data coming from the incoming client 
    //res = response object. Contains all the juicy data and methods we need to send a response to the client. 

    //Using path, we will navigate to our resources and public file. 
    let file = path.join(__dirname, "app", "resources", "html", "datainput.html") //__dirname is a constant that is established, automatically provides the path to the current folder <THIS> Js file is in. 
    console.log(file)

    res.sendFile(file)
}