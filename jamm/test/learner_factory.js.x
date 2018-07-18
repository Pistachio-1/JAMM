import faker from faker;
import models from ../models

// generate a fake learner
const data = async (props = {}) => {
    const defaultProps = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age : 7,
        favoritePet : "Dog"
    };
    return Object.assign({}, defaultProps, props);
};

export default async (props = {}) =>
  models.User.create(await data(props));

// ref: https://medium.com/riipen-engineering/testing-with-sequelize-cc51dafdfcf4