const { asClass, createContainer } = require('awilix');

const Environment = require('./Environment');
const ConfigureDatabase = require('./ConfigureDatabase');
const UserRepository = require('./UserRepository');
const UserService = require('./UserService');
const UserController = require('./UserController');
const userSchema = require('./UserSchema');

const container = createContainer();
container.register({
  environment: asClass(Environment).singleton(),
  userController: asClass(UserController).scoped(),
  userService: asClass(UserService).scoped(),
  userRepository: asClass(UserRepository).scoped(),
  configureDatabase: asClass(ConfigureDatabase).scoped(),
  userSchema: asClass(userSchema).scoped(),
});

module.exports = container;
