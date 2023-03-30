const PersonController = require("../controllers/person.controller");

module.exports = app => {
    app.get('/api', PersonController.index);
    app.post('/api/person', PersonController.createPerson);
    app.get('/api/person', PersonController.findAllPeople)
    app.get('/api/person/:id', PersonController.getPerson);
}

