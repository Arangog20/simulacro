const users = require("../model/usersModel");

const usersController = {

    getAllUsers : async (req,res) =>{
        try {
            const getUser = await users.find();
            res.json(getUser);

        }catch(error){
            console.error('Error getting users',error);
            res.status(500).json({message:"internal server error"});
        }
    },

    
};

module.exports = usersController;
