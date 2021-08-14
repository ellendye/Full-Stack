const Author = require('../models/author.model')

//Create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({message: "Something went wrong when creating the author", err:err}))
}

//Read all
module.exports.findAllAuthors = (req, res) => {
    let sort = { name: 1}
    Author.find().sort(sort)
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Something went wrong when finding all authors", err: err}))
}

//Read one
module.exports.findAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when finding one author", err: err}))
}

//Update
module.exports.updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Something went wrong when updating an author", err: err}))
}

//Delete
module.exports.deleteAuthor = (req, res) => {
    Author.remove({_id: req.params._id})
        .then(res.json({message:"Author was successfullly removed"}))
        .catch(err => res.json({message: "Something went wrong when deleting an author", err: err}))
}   