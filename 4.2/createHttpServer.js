const express = require("express");
const app = express();

app.get("/sum",function(req,res){  // ("sum/:a/:b") instead of /sum?a=1&b=2; we can write as /sum/1/2 
    const a = parseInt(req.query.a);  // or Number(req.query.a)   // we have to do (req.params.a); if we are initializing like ("sum/:a/:b")
    const b = parseInt(req.query.b);
    res.json({
        sum : a+b
    })
});

app.get("/subtract",function(req,res){
 const c = req.query.c;
 const d = req.query.d;
 res.json({
    subtract : c-d
 })
});

app.get("/multiply",function(req,res){
 const e = (req.query.e);
 const f =(req.query.f);
 res.json({
    multiply : e*f
 })
});

app.get("/divide",function(req,res){
 const g = req.query.g;
 const h = req.query.h;
 res.json({
    divide : g/h
 })
});

app.listen(3002);