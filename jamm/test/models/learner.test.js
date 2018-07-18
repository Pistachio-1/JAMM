// import faker from faker;
// import models from "./models";
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');


const LearnerModel = require("../../src/models/learner");
describe("/src/models/Learner", () => {
    const Model = LearnerModel(sequelize, dataTypes)
    const instance = new Model()
    checkModelName(Model)('Learner')
    context('properties', () => {
        ;['firstName', 'lastName', 'age', 'favoritePet', 'createdAt', 'updatedAt']
            .forEach(checkPropertyExists(instance))
    })
})
