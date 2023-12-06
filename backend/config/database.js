const mongoose = require('mongoose');
const dotenv = require('dotenv')

const connectDatabase = ()=> {
    mongoose.connect(process.env.DB_LOCAL_URI)
    .then(con=>{
        console.log(`MongoDB is connected to the HOST: ${con.connection.host}`)
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase;