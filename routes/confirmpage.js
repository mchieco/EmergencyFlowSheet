/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {*} next 
 */
const controller = function(req,res,next){
    
    //we don't have to send a file. We can just send text if we wish.
    let file = path.join(__dirname, "app", "resources", "html", "confirmpage.html") //__dirname is a constant that is established, automatically provides the path to the current folder <THIS> Js file is in. 

    res.sendFile(file)
}