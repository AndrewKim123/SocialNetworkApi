const mongoose = require("mongoose");

const url = "mongodb+srv://AndrewKim1:Aka45654.@cluster0.30jpfbd.mongodb.net/socialnetwork?retryWrites=true&w=majority"

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url);
        console.log(`MongoDB Connected ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB