const express = require('express');
// const { asClass, asValue, createContainer } = require('awilix');
// const { scopePerRequest } = require('awilix-express');
const awilix = require('awilix');

const Environment = require('./Environment');
const ConfigureDatabase = require('./ConfigureDatabase');
const UserRepository = require('./UserRepository');
const UserService = require('./UserService');
const UserController = require('./UserController');
const MongooseUser = require('./UserSchema');

const app = express();
app.use(express.json());

const container = awilix.createContainer();
container.register({
  env: awilix.asClass(Environment),
  controller: awilix.asClass(UserController),
  userService: awilix.asClass(UserService),
  userRepository: awilix.asClass(UserRepository),
  config: awilix.asClass(ConfigureDatabase),
  mongooseUser: awilix.asClass(MongooseUser),
});

// Add the middleware, passing it your Awilix container.
// This will attach a scoped container on the context.

// container.register({
//   configuredDatabase: asFunction(container.resolve('env').getMongoose()), // from some authentication middleware...
// });

//console.log(env);
// const configuredDatabase = new ConfigureDatabase(env, mongoose).getMongoose();
// const mongooseUser = new MongooseUser(configuredDatabase).getUserSchema();
// const repo = new UserRepository(mongooseUser);
// const service = new UserService(repo);
// const controller = new UserController(service);

// repo.saveUser({
//   userName: 'Khurram',
//   firstName: 'Khurram',
//   lastName: 'Shahzad',
//   email: 'itskhurrams@gmail.com',
// });
app.get('/users', container.resolve('controller').getUsers);
app.get('/usersAsync', container.resolve('controller').getUsersAsync);

app.listen(container.resolve('env').PORT, () => {
  console.log(
    `Server started at ` +
      container.resolve('env').URL +
      ':' +
      container.resolve('env').PORT
  );
});
