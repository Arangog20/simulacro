const mongoose = require('mongoose');


const userShema = new mongoose.Schema ({
    id:Number,
    nombre: String,
    apellido: String,
    correo : String,
    contraseña : String
});

const users = mongoose.model('usersLogin', userShema);

module.exports = users;

