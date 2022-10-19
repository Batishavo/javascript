const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://litos:CISCO@cluster0.wn6vz82.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority')

const User = mongoose.model('Use',{
    username:String,
    edad:Number,
})

const crear = async ()=>{
    const user = new User({
        username: 'Chanchito',
        edad:27
    })
    const savedUser =  await user.save();
    console.log(savedUser)
}

crear();