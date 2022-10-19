const User = {
    get:(req, res)=>{
        res.status(200).send("este es un chanchito")
    },
    list: (req,res)=>{
        res.status(200).send('Hola chanchito')
    },
    create: (req,res)=>{
        res.status(201).send("Creando un chanchito")
    },
    update:(req,res)=>{
        res.status(204).send('actualizando chanchito')
    },
    delete:(req,res)=>{
        res.status(204).send('eliminando chanchito :(')
    }
}

module.exports = User
