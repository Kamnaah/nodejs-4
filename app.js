//import express
const express=require("express");
//import body-parse.
var  bodyParser = require('body-parser');

const app=express();

// parse application/x-www-form-urlencoded--------useing body-parse
app.use(bodyParser.urlencoded({ extended: false }))

//ejs setting
app.set("views","./views")
app.set("view engine","ejs")
// check / gives hello world
app.get("/",(req,res)=>{
    res.send("Hello world");
})
//ejs has views file inside view calcy.ejs file rendering 
app.get("/calcy",(req,res)=>{
    res.render("calcy.ejs");
})

//method post---add
app.post("/add",(req,res)=>{
    console.log(req.body);
    let num1=req.body.num1;
    let num2=req.body.num2;
    console.log(typeof(num1))

    if(num1<-1000000&&num2<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(num1>1000000&&num2>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.status(404).send({
            status:"error",
            message:"Invalid data-type"
        })
    }
    else {
    res.status(200).send({
        status:"success",
        message:"the sum of given two numbers",
        sum:Number(req.body.num1)+Number(req.body.num2)
    })
}
})
//method post ---sub
app.post("/sub",(req,res)=>{
    console.log(req.body);
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(num1<-1000000&&num2<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(num1>1000000&&num2>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.status(404).send({
            status:"error",
            message:"Invalid data-type"
        })
    }
    else {
    res.status(200).send({
        status:"success",
        message:"the difference of given two numbers",
        sub:Number(req.body.num1)-Number(req.body.num2)
    })
}
})
//method post ---multiply
app.post("/multiply",(req,res)=>{
    console.log(req.body);
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(num1<-1000000&&num2<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(num1>1000000&&num2>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.status(404).send({
            status:"error",
            message:"Invalid data-type"
        })
    }
    else{
        res.status(200).send({
        status:"success",
        message:"The product of given numbers",
        multiply:Number(req.body.num1)*Number(req.body.num2)
    })
}
})
//method post ---divide
app.post("/divide",(req,res)=>{
    console.log(req.body);
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(num2==0){
        res.status(404).send({
            status:"error",
            message:"Cannot divide by zero",
        })
    }
    else if(num1<-1000000&&num2<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(num1>1000000&&num2>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else if(isNaN(num1)||isNaN(num2)){
        res.status(404).send({
            status:"error",
            message:"Invalid data-type"
        })
    }
    else{
    res.status(200).send({
        status:"success",
        message:"The division of given numbers",
        div:Number(num1)/Number(num2)
    })
}
})
//server
app.listen(3000,()=>{
    console.log("its working");
})