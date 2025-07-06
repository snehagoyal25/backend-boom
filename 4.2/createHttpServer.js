const express = require("express");
const app = express();

app.get("/sum",function(req,res){
    const a = parseInt(req.query.a);
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