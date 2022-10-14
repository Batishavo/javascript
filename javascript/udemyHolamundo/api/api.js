const { application } = require('express');
const express = require('express');

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Feliz");
});
app.post("/",(req,res)=>{
    res.status(201).send("creando");
});
app.listen(port,() =>{
    console.log("ARancando la aplicacion");
});