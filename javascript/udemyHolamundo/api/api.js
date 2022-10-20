const express = require('express');
const mongoose = require("mongoose")
const user = require("./user.crontroller")
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://litos:CISCO@cluster0.wn6vz82.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority')

app.get("/",user.list)
app.post("/",user.create)
app.get("/:id",user.get)
app.put("/:id",user.update)
app.patch("/:id",user.update)
app.delete('/:id',user.delete)


app.get('*',(req,res)=>{
    res.status(404).send("Esta pagina no exi")
});
app.post('*',(req,res)=>{
    res.status(404).send("Esta pagina no exi")
});
app.listen(port,() =>{
    console.log("ARancando la aplicacion");
});