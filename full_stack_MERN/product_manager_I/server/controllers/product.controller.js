const Product = require("../models/product.model");

module.exports.createNewProduct = (request, response) => {
    Product.create(request.body)
        .then(newlyCreatedProduct => response.json( newlyCreatedProduct ))
        .catch(err => response.json({ message: "Something went wrong", error: err }))
}

module.exports.findAllProducts = (request, response) => {
    Product.find({})
        .then(allProducts => response.json( allProducts ))
        .catch(err => response.json(err))
}

module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(oneProduct => response.json( oneProduct ))
        .catch(err => response.json(err))
}

module.exports.updateExistingProduct = (request, response) => {
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json( updatedProduct ))
        .catch(err => response.json(err))
}

module.exports.deleteAnExistingProduct = (request, response) => {
    Product.deleteOne({_id:request.params.id})
        .then(result => response.json( result ))
        .catch(err => response.json(err))
}