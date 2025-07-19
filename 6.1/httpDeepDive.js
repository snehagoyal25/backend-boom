// https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fas //s

const express = require("express");
const app = express();
app.use(express.json()); // When a client (like Postman, browser, or frontend app) sends JSON data in a request body (usually with POST or PUT), this line ensures your Express app can read and access that data using req.body.
// 📦 Why it's needed?
// Because Node.js doesn’t parse incoming JSON by default.
// This middleware:
// Reads raw incoming request
// Parses the JSON
// Adds it to req.body for easy use


//In older versions of Express (<4.16), you had to install body-parser separately. Now, express.json() is built-in.


// Create two new POST routes, one for signing up and one for signing in. 
function signinHandler(req,res){

}

function signupHandler(req,res){

}


app.post("/signin",signupHandler)
app.post("/signup",signinHandler)

app.listen(3000);// that the http server is running on port 3000