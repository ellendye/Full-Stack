const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    //Create
    app.post("/api/authors/create", AuthorController.createAuthor)
    //Read all
    app.get("/api/authors", AuthorController.findAllAuthors)
    //Read one
    app.get("/api/authors/:_id", AuthorController.findAuthor)
    //Update
    app.put("/api/authors/update/:_id", AuthorController.updateAuthor)
    //Delete
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor)
}