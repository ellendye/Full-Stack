const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/team_manager", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to the DB"))
    .catch(err => console.log("Lost connection to the DB", err))