// Assignment : Create a auth middleware
// https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fas //s 
// it says :- Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn't login .

const express = require("express")

const jwt = require("jsonwebtoken")
const JWT_SECRET = "";

const app = express();
app.use(express.json());

const users =[];

function logger(req,res,next){
    console.log(req.method+" request came");
    next();
}

app.get("/",function(req,res){
    res.sendFile(path.join(_dirname,index.html))
})

app.post("/signup",logger,function(req,res){
    const usernme = req.body.username;
    const password = req.body.password;
    // Checking if user already exists 
    const existingUser = users.find(user=>user.username===username);
    if(existingUser){
        return res.status(400).json({
            message:"User already exists with this username"
        })
    }
    // If user not exists , add the user 
    users.push({
        username : username,
        password : password
    })
    res.json({
        message : "You are signed in "
    })
})

app.post("/signin",logger,function(req,res){

})

function auth(req,res,next){

}

app.get("/me",logger,function(req,res){

})

app.listen(3000);