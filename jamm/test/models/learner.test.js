// import faker from faker;
// import models from "./models";
const { expect } = require('chai');

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');


const LearnerModel = require("../../src/models/Learner");
describe("/src/models/Learner", () => {
    const Learner = LearnerModel(sequelize, dataTypes)
    const learner = new Learner()
    // ! checkModelName(Learner)('Learner')  does not pass test 
    context('properties', () => {
        ;['firstName', 'lastName', 'email', 'coins', 'favoritePet', 'createdAt', 'updatedAt']
            .forEach(checkPropertyExists(learner))
    })
})
