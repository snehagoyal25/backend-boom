// Middleware practice
// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require ("express");
const app = express();

function middleware(req,res,next){
    //extra
    // requestCount = requestCount+1;
    // console.log(`Total number of requests = ${requestCount}`);
    //logging = method , URL and timestamp
    console.log("Method is "+req.method); // Method is GET
    console.log("URL is "+req.url);       // URL is /multiply?a=1&b=2
    console.log(new Date());              // 2025-07-10T06:09:36.370Z
    next();
}

function realSumHandler(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        sum : a+ b
    })
}
function realSubtractHandler(req,res){
    const a = req.query.a
    const b = req.query.b
    res.json({
        subtract : a-b
    })
}
function realMultiplyHandler(req,res){
    const a = req.query.a
    const b = req.query.b
    res.json({
        multiply : a*b
    })
}
function realDivideHandler(req,res){
    const a = req.query.a
    const b = req.query.b
    res.json({
        divide : a/b
    })
}

app.use(middleware);
app.get("/sum",realSumHandler);
app.get("/subtract",realSubtractHandler);
app.get("/multiply",realMultiplyHandler);
app.get("divide",realDivideHandler);

app.listen(3001);