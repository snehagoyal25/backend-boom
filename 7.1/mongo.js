// https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682es //s 

// backend servers are transient", it means that they are not permanent — they can be stopped, restarted, replaced, or destroyed at any time.
//If a server crashes, a new one may replace it automatically.

// "Servers handle tasks and give responses(they should be stateless), but only databases keep the information stored safely even if the server stops or changes." ✅
// npm init -y
// npm install express mongoose
// npm install jsonwebtoken


const express = require("express");
const {UserModel,TodoModel} = require("./db");
const app = express();
app.use(express.json());

// await is only use when the function is async
app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        password : password,
        name : name
    })
    res.json({
        message : "You are signed up!"
    })
})

app.post("/signin",function(req,res){

})

app.post("/todo",function(req,res){

})

app.get("/todos",function(req,res){

})

app.listen(3000);