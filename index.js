const express = require('express');
const mongoose = require("mongoose");

const dotenv = require('dotenv');
const Environment= require('./environment');
const ConfigureDatabase =  require('./configureDatabase');


const app = express();

const env =  new Environment(dotenv);
const dbConfig = new ConfigureDatabase(env,mongoose);


console.log(env);


app.listen(env.PORT, () => {
    console.log(`Server started at `+env.URL+ env.PORT);
});