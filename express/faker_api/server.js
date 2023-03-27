const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

let userId = 0;
let companyId = 0;

const createUser = () => {
    userId += 1;
    const newUser = { id: userId, firstName: faker.name.firstName(), lastName: faker.name.lastName(), phoneNumber: faker.phone.number(), email: faker.internet.email(), password: faker.internet.password() };
    return newUser;
}

const createCompany = () => {
    companyId += 1;
    const newCompany = { id: companyId, name: faker.company.name(), address: { street: faker.address.streetAddress(), city: faker.address.city(), state: faker.address.state(), zipCode: faker.address.zipCode(), country: faker.address.country() } };
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req,res) => {
    res.json({user: createUser(), company: createCompany()});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );