const express = require('express');
const diContainer = require('./dependencyInjection');

const app = express();
app.use(express.json());

app.get('/users', diContainer.resolve('userController').getUsers);
app.get('/usersAsync', diContainer.resolve('userController').getUsersAsync);

app.listen(diContainer.resolve('environment').PORT, () => {
  console.log(
    `Server started at ` +
      diContainer.resolve('environment').URL +
      ':' +
      diContainer.resolve('environment').PORT
  );
});
