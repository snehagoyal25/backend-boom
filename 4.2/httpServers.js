//https://petal-estimate-4e9.notion.site/Intro-to-HTTP-26c5803f153b4401aa76e9fac08ac427s //s
// You need to deploy the websites on port 443.-> if not , it will be included in an ugly pattern.

// CRUD operation -> post , get , put , delete are known as methods.  
// Create = Post request 
// Read = Get request 
// Update = Put request
// Delete = Delete request 
// If we are using https , it means it is pointing to port 443 by default 
// HTTPS : 443 , // HTTP : 80 . // SSH : 22 


// initialize -> npm init -y
// npm i express

const express = require("express")
const app = express();
//route handler 
app.get('/',function(req,res){
    res.send('Hello world ')
})
app.listen(3001); // which port you want to listen 
// 127.0.0.1 = localhost 