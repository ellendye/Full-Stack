const Player = require("../models/team.models")

//Create
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.json({message: "Something went wrong when adding a player to the DB", err: err}))
}

//Read all
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json({message: "Something went wrong when finding all players", err: err}))
}

//Read one
module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params._id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err=> res.json({message: "Something went wrong when finding one player", err: err}))
}

//Update
module.exports.updatePlayer = (req, res) => {
    Player.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.json({message: "Something went wrong when updating a player", err: err}))
}

//Delete
module.exports.deletePlayer = (req, res) => {
    Player.remove({_id: req.params._id})
        .then(res.json({message: "Player was successfully removed"}))
        .catch(err => res.json({message: "Something went wrong with deleting a game from the DB", err: err}))
}