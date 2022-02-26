const mongoose = require("mongoose");



const connectDataBase = async () =>{
    try{
        await mongoose.connect("mongodb+srv://main:05DXyeY3B1gffqUS@cluster0.t5kdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("Mongo conectado")
    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

module.exports = connectDataBase;



