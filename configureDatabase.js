'use strict';
const mongoose = require('mongoose');

module.exports = class ConfigureDatabase {
  constructor(environmentObject) {
    this.mongoose = mongoose;
    this.environment = environmentObject.env;
    this.mongoose
      .connect(this.environment.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        console.log('connected to MongoDB database!');
        //console.log(result);
        //return this.mongoose;
        //return this.mongoose;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getMongoose = () => {
    return this.mongoose;
  };
};
