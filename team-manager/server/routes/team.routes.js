const PlayerController = require("../controllers/team.controllers")

module.exports = app => {
    //Create
    app.post("/api/players/create", PlayerController.createPlayer)
    //Read all
    app.get("/api/players", PlayerController.findAllPlayers)
    //Read one
    app.get("/api/players/:_id", PlayerController.findOnePlayer)
    //Update
    app.put("/api/players/update/:_id", PlayerController.updatePlayer)
    //Delete
    app.delete("/api/players/delete/:_id", PlayerController.deletePlayer)
}