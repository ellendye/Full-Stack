const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Player name is required"], 
        minlength: [2, "Player name must be at least 2 characters long"]
    }, 
    preferredPosition: {
        type: String, 
        required: [false]
    }, 
    game1: {
        type: String, 
        required: [false]
    },
    game2: {
        type: String, 
        required: [false]
    }, 
    game3: {
        type: String, 
        required: [false]
    }
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;