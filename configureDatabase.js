'use strict';

module.exports = class ConfigureDatabase {
  constructor(_environment, _mongoose) {
    this.mongoose = _mongoose;
    this.environment = _environment;
    this.mongoose
      .connect(this.environment.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        console.log('connected to MongoDB database!');
        //console.log(result);
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
