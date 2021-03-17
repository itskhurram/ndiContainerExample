const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Environment = require('./environment');
const ConfigureDatabase = require('./configureDatabase');
const UserRepository = require('./userRepository');
const UserService = require('./userService');

const app = express();

const env = new Environment(dotenv);
console.log(env);
const dbConfigObject = new ConfigureDatabase(env, mongoose);
const dbConfig = dbConfigObject.getMongoose();
console.log(dbConfig);

const repo = new UserRepository(dbConfig);
const service = new UserService(repo);
service.getUsers();

console.log(service.getUsers());

app.listen(env.PORT, () => {
  console.log(`Server started at ` + env.URL + ':' + env.PORT);
});
