const { application } = require('express');
const user = require("./user.crontroller")
const express = require('express');

const app = express();
const port = 3000;

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