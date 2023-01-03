const { application } = require('express');
const express = require('express');
const mongoose = require("mongoose")
const user = require("./user.crontroller")
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://litos:CISCO@cluster0.wn6vz82.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority')

app.get("/users",user.list)
app.post("/users",user.create)
app.get("/users/:id",user.get)
app.put("/users/:id",user.update)
app.patch("/users/:id",user.update)
app.delete('/users/:id',user.delete)

app.use(express.static("app"))
app.get("/",(req, res) =>{
    console.log(__dirname )
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*',(req,res)=>{
    res.status(404).send("Esta pagina no exi")
});
app.post('*',(req,res)=>{
    res.status(404).send("Esta pagina no exi")
});
app.listen(port,() =>{
    console.log("ARancando la aplicacion");
});