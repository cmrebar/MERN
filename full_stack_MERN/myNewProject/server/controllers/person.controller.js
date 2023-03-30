const Person = require("../models/person.model");
module.exports.index = (req,res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(newPerson => res.json(newPerson))
        .catch(err => res.json(err));
}

module.exports.findAllPeople = (req, res) => {
    Person.find({})
        .then(allPeople => res.json(allPeople))
        .catch(err => res.json(err));
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(onePerson => res.json(onePerson))
        .catch(err => res.json(err));
}