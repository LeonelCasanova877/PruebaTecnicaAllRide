const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    genre: {
        type:String,
        required:true
    },
    director: {
        type:String,
        required:true
    },
    summary: {
        type:String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = Movie = mongoose.model('Movie',MovieSchema);
