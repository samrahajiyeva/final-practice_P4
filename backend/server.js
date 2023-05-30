const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const app=express()
app.use(express.json())
app.use(cors())

const PORT = 2222
require('dotenv').config()
mongoose.connect(process.env.DB_CONNECT).then(()=> {
    console.log("db connected");
})

app.listen(PORT , ()=> {
    console.log(`app running on ${PORT}`);
})

//Schemas
const productSchema = mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Products = mongoose.model("Products" , productSchema)

//post
app.post("/products" , async(req , res) => {
    const newProduct = new Products({
        ...req.body
    })

    await newProduct.save()
    res.send(newProduct)
})

//get
app.get("/products" , async(req , res)=> {
    const data = await Products.find()
    res.send(data)
})

//get by id
app.get("/products/:id" , async(req, res)=> {
    const {id}=req.params
    const target = await Products.findById(id)
    res.send(target)
})

//delete
app.delete("/products/:id" , async (req , res) => {
    const {id} = req.params
    await Products.findByIdAndDelete(id)
    res.send(`${id}'li product has been deleted`)
})