// https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fas //s

const express = require("express");
const app = express();
// Create two new POST routes, one for signing up and one for signing in. 
function signinHandler(req,res){

}

function signupHandler(req,res){

}

app.post("/signup",signinHandler)
app.post("/signin",signupHandler)

app.listen(3000);// that the http server is running on port 3000