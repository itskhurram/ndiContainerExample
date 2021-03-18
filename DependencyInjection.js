import { ContainerBuilder } from 'node-dependency-injection';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

import Environment from './Environment.js';
import ConfigureDatabase from './ConfigureDatabase.js';
import UserRepository from './UserRepository.js';
import UserService from './UserService.js';
import UserController from './UserController.js';
import MongooseUser from './UserSchema.js';

let container = new ContainerBuilder();

container.register('Environment', Environment).addArgument(dotenv);

container
  .register('ConfigureDatabase', ConfigureDatabase)
  .addArgument(dotenv)
  .addArgument(mongoose);

container.register('MongooseUser', MongooseUser).addArgument(ConfigureDatabase);

container.register('UserRepository', UserRepository).addArgument(MongooseUser);

container.register('UserService', UserService).addArgument(UserRepository);

container.register('UserController', UserController).addArgument(UserService);

export default container;
