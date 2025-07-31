const express=require("express");
const app = express();

const todos=[];

app.get("/",function(req,res){
    res.sendFile(path.join(_dirname,"todo.html"))
})