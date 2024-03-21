const { Console, error } = require('console');
const mongoose = require('mongoose');
let user;

const connectionData = async () => {
    try{
        if (!user){
            user = mongoose.model('user',require('../model/usersModel').schema);
        }

        await initializeData();

        await mongoose.connect('mongodb+srv://manuelagiraldo1999:manu12345678@cluster0.dnlbckj.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((error)=> console.log(error));

    }catch(error){
        console.error('failed to connect to MongoDB', error);
        process.exit(1);

    }
};

const initializeData = async () => {
    try{
        console.log('data full baby')

    }catch(error){
        console.log('Data initialization error', error);
        process.exit(1);
    }
};

module.exports = connectionData;
