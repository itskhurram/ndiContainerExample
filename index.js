const express = require('express');
const { scopePerRequest } = require('awilix-express');
const UserController = require('./UserController');
const diContainer = require('./dependencyInjection');

const app = express();
app.use(express.json());
app.use(scopePerRequest(diContainer));
app.get('/users', (req, res, next) => {
  const api = new UserController(req.container.cradle);
  return api.getUsers(req, res, next);
});
app.get('/usersasync', (req, res, next) => {
  const api = new UserController(req.container.cradle);
  return api.getUsersAsync(req, res, next);
});
app.listen(diContainer.resolve('environment').PORT, () => {
  console.log(
    `Server started at ` +
      diContainer.resolve('environment').URL +
      ':' +
      diContainer.resolve('environment').PORT
  );
});
