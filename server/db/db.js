const mongoose = require('mongoose');

const DBConnection = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`);
    }catch(error){
        console.log(`Error in MongoDB ${error}`);
    }
}

module.exports = DBConnection;