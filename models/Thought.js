const mongoose = require("mongoose")

const ThoughtModal = new mongoose.Schema({
    thoughtText:{
        type:String,
        required:true,
        minLength:1,
        maxLength:280
    },
    username:{
        type:String,
        required:true
    },
    reactions:[
        new mongoose.Schema({
            reactionBody:{
                type:String,
                required:true,
                maxLength:280
            },
            username:{
                type:String,
                required:true
            }
        },{timestamps:true})
    ]
},{timestamps:true})

const Thought = mongoose.model("thoughts",ThoughtModal)

module.exports = Thought