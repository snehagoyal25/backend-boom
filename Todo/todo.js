const express=require("express");

const jwt = require("jsonwebtoken")


const app = express();

const todos=[];

app.get("/",function(req,res){
    res.sendFile(path.join(_dirname,"todo.html"))
})
<<<<<<< HEAD
=======

app.listen(3002);
>>>>>>> 8b8f83b (todo)
