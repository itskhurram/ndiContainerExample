"use strict";


module.exports = class ConfigureDatabase {
  constructor(environment,mongoose) {
    mongoose
      .connect(environment.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        console.log("connected to MongoDB database!");
        //console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};