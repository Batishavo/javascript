const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://litos:CISCO@cluster0.wn6vz82.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority')

const User = mongoose.model('Use',{
    username:String,
    edad:Number,
})

const crear = async ()=>{
    const user = new User({
        username: 'Chanchito triste',
        edad:25
    })
    const savedUser =  await user.save();
    console.log(savedUser)
}

//crear();
const buscarTodo = async() =>{
    const users = await User.find();
    console.log(users)
}

// buscarTodo();

const buscar = async()=>{
    const user = await User.find({username: 'Chanchito triste'})
    console.log(user)
}
// buscar();
const buscandoUno = async () => {
    const user = await User.findOne({username: 'Chanchito triste'})
    console.log(user)
}
//buscandoUno();
const actualizar = async () =>{
    const user = await User.findOne({username: 'Chanchito triste'})
    console.log(user);
    user.edad = 30;
    await user.save();
}

// actualizar();
const eliminar = async () =>{
    const user = await User.findOne({username: 'Chanchito triste'})
    console.log(user);
    if(user){
        await user.remove();
    }
}

//eliminar();