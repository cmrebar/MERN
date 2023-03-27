const Joke = require('../models/jokes.model');

const findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => res.json( allDaJokes ))
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
    }

const findOneSingleJoke = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params.id })
        .then((oneSingleJoke) => 
            res.json( oneSingleJoke ))
            .catch((err) => {
                res.json({ message: "Something went wrong", error: err })
            });
        }

const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
        .then((newlyCreatedJoke) => res.json( newlyCreatedJoke ))
            .catch((err) => console.log(err));
}

const updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => res.json( updatedJoke ))
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
    }

const deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => 
            res.json( result )
        )
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
    }

module.exports = {
    findAllJokes,
    findOneSingleJoke,
    createNewJoke,
    updateExistingJoke,
    deleteAnExistingJoke
};