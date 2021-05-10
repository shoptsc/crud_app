const mongoose = require("mongoose")

exports.connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex : true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        }, console.log("Database connected successfully".yellow))  
    }
    catch(error) {
        console.log(error.red)
    }
}
