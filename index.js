const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Environment = require('./Environment');
const ConfigureDatabase = require('./ConfigureDatabase');
const UserRepository = require('./UserRepository');
const UserService = require('./UserService');
const UserController = require('./UserController');
const MongooseUser = require('./UserSchema');

const app = express();
app.use(express.json());

const env = new Environment(dotenv);

//console.log(env);
const configuredDatabase = new ConfigureDatabase(env, mongoose).getMongoose();
const mongooseUser = new MongooseUser(configuredDatabase).getUserSchema();
const repo = new UserRepository(mongooseUser);
const service = new UserService(repo);
const controller = new UserController(service);

// repo.saveUser({
//   userName: 'Khurram',
//   firstName: 'Khurram',
//   lastName: 'Shahzad',
//   email: 'itskhurrams@gmail.com',
// });
app.get('/users', controller.getUsers);
app.get('/usersAsync', controller.getUsersAsync);

app.listen(env.PORT, () => {
  console.log(`Server started at ` + env.URL + ':' + env.PORT);
});
