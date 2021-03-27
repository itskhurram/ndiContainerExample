'use strict';
const { createContainer, Lifetime } = require('awilix');

const container = createContainer();
container.loadModules(['environment.js', 'userSchema.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});
container.loadModules(
  [
    'configureDatabase.js',
    'dependencyInjection.js',
    'userController.js',
    'userRepository.js',
    'userService.js',
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
    },
  }
);

module.exports = container;
