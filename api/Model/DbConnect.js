const mongoose = require('mongoose')
const dbConnect = async() =>{
    try{
    await mongoose.connect(process.env.mongourl)
    console.log("Database Connection Successful")
    }
    catch(err){
    console.log("Database Connection Failed")
    }
}

module.exports = dbConnect