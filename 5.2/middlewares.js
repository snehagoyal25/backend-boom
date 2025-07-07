// In Express.js, middleware refers to functions that have access to the request object (req), response object (res), and the next function in the application's request-response cycle. 
const express = require("express");
const app = express();

let requestCount = 0;
function requestIncreaser(){
    requestCount = requestCount+1;
    console.log(`Total number of requests = ${requestCount}`)
}
app.get("/sum",function(req,res){  // ("sum/:a/:b") instead of /sum?a=1&b=2; we can write as /sum/1/2 
    // count the number of requests 
    // requestCount = requestCount+1;
    // console.log(`Total number of requests = ${requestCount}`)
    // or
    requestIncreaser();
    //main logic
    const a = parseInt(req.query.a); 
    const b = parseInt(req.query.b);
    res.json({
        sum : a+b
    })
});

app.get("/subtract",function(req,res){
    // requestCount = requestCount+1;
    // console.log(`Total number of requests = ${requestCount}`)
    requestIncreaser();
    // main logic 
 const c = req.query.c;
 const d = req.query.d;
 res.json({
    subtract : c-d
 })
});

app.listen(3003);