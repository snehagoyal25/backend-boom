const express=require("express");

const jwt = require("jsonwebtoken")
const JWT_SECRET = "snehagoyal"

const app = express();

const todos=[];

app.get("/",function(req,res){
    res.sendFile(path.join(_dirname,"todo.html"))
})

app.listen(3002);