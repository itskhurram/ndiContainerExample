// const dotenv = require('dotenv');
// const Environment = require('./Environment');

// const { asClass, asValue, createContainer } = require('awilix');
// const { scopePerRequest } = require('awilix-express');

// const container = createContainer();
// container.register({
//   // Scoped lifetime = new instance per request
//   // Imagine the TodosService needs a `user`.
//   // class TodosService { constructor({ user }) { } }
//   env: asClass(Environment).scoped(),
// });

// // Add the middleware, passing it your Awilix container.
// // This will attach a scoped container on the context.
// app.use(scopePerRequest(container));

// container.register({
//   dotenv: asValue(dotenv), // from some authentication middleware...
// });

