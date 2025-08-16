// https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682es //s 

// backend servers are transient", it means that they are not permanent — they can be stopped, restarted, replaced, or destroyed at any time.
//If a server crashes, a new one may replace it automatically.

// "Servers handle tasks and give responses(they should be stateless), but only databases keep the information stored safely even if the server stops or changes." ✅
// npm init -y
// npm install express mongoose
// npm install jsonwebtoken


const express = require("express");
const {UserModel,TodoModel} = require("./db");

const jwt = require("jsonwebtoken");
const mongoose = require ("mongoose");
const JWT_SECRET = "snehagoyal@2525";

mongoose.connect("mongodb+srv://snehagoyal:<snehagoyal2555>@cluster0.ytr2eju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const app = express();
app.use(express.json());

// await is only use when the function is async
app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


// we are using await as firstly it will get data in mongodb then only put the user data 
    await UserModel.create({
        email : email,
        password : password,
        name : name
    })
    res.json({
        message : "You are signed up!"
    })
})

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password:password
    })

console.log(user);

    if(user){
        const token = jwt.sign({
             id : user._id.toString() 
        },JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message : "Incorrect credentials"
        })
    }
})

app.post("/todo",auth ,function(req,res){
    const userId =  req.userId;

    res.json({
        userId:userId
    })
})

app.get("/todos",auth ,function(req,res){
        // req.userId 
        const userId =  req.userId;

    res.json({
        userId:userId
    })
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);

if(decodedData){
    req.userId = decodedData.id;
    next();
    }else{
        res.status(403).json({
            message : "Incorrect credentials "
        })
    }
}

app.listen(3000);

// https://github.com/100xdevs-cohort-3/week-7-mongos //s