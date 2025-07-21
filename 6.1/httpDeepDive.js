// https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fas //s

const express = require("express");
// Importing library
const jwt =require("jsonwebtoken");
// Creating a global variable
const JWT_SECRET = "randomsnehailovemumma";
const app = express();
app.use(express.json()); 

const users=[];
// Now using jsonwebtoken (JWT) instead of generating tokens ourselves .
//    function generateToken() {
//     let options = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//         '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
//     ];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         token += options[Math.floor(Math.random() * options.length)];
//     }

//     return token;
// }

// // Example usage:
// console.log(generateToken());


// Create two new POST routes, one for signing up and one for signing in. 
function signupHandler(req,res){
 const username = req.body.username;
 const password = req.body.password;

 if(users.find(u=>u.username===username)){
    res.json({
        message :"You have already signed up"
    })
 }
 users.push({
    username : username,
    password : password
 })

 res.json({
    message : "You have signed in "
 })
 console.log(users)
}

function signinHandler(req,res){
 const username = req.body.username;
 const password = req.body.password;

 let foundUser = null;
 for(let i=0;i<users.length;i++){
    if(users[i].username===username && users[i].password===password){
       foundUser = users[i];
    }
 }

 if(foundUser){
    const token = generateToken();
    foundUser.token = token // This line of code not generate username and password only that is generating prior but now this line of code will gwnwrate a 32 character token as a response to the user .
    res.json({
        message : token
    })
    console.log(users);
 }
 else{
res.status(403).send({
    message :"Invalid username or password"
})
console.log(users)
 }
// or
//  const user = user.find(function(u){
//     if(u.username==username && u.password==password){
//         return true;
//     }
//     else{
//         return false;
//     }
//  })
}


app.post("/signup",signupHandler)
app.post("/signin",signinHandler)

// Lets create an endpoint (/me) that returns the user their information 'only if they send their . 
app.get("/me",function(req,res){
    const token = req.headers.token
    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            foundUser=users[i]
        }    
    }
    if(foundUser){
res.json({
    username : foundUser.username,
    password : foundUser.password
})
    }
    else{
            res.status(401).send({
                message :"unauthorized user "
            })
        }

})
app.listen(3001);// that the http server is running on port 3000