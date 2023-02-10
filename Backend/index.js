const express = require('express')
const app = express()
const cors = require('cors')
const connect = require("./connection/connect.js")
const FormModel = require("./models/FormModel.js")

app.use(express.json())
app.use(cors())

app.get("/",async (req,res)=>{
    try{
        const forms = await FormModel.find()
        
        res.status(200).json({
            message : "Success",
            data : forms
            
        })
    }
    catch(e){
        res.status(404).json({
            message : "Not Found"
        })
    }
})
app.post("/form-submit",async (req,res)=>{
    console.log(req.body)
   try{
        const user = await FormModel.create(req.body)
        res.status(200).json({
            message : "Success",
            user
        })
   }
   catch(e){
    res.status(500).json({
        message : e.message
    })
   }
})





app.listen(5000,()=>{console.log('server up at 5000')})