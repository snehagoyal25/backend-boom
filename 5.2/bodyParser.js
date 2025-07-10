// Post method cannot be checked on browser , it is checked in Postman only
// we can use either express.json or we can use body-parser;
// bodyParser is the external middleware 
const express = require("express");
const bodyParser = require("body-parser");
const app =express();

// app.use(express.json())
app.use(bodyParser.json());
app.post("/sum",function(req,res){
    // req.query is used for GET requests 
    const a = parseInt(req.body.a); 
    const b = parseInt(req.body.b);
    res.json({
        sum : a+b
    })
})

app.listen(3001,()=>{
    console.log(`Server is running`)
});