const express = require('express');

const dotenv = require('dotenv');
const Environment= require('./environment');
const ConfigureDatabase =  require('./configureDatabase');


const app = express();

const env =  new Environment(dotenv);
const dbConfig = new ConfigureDatabase(env);
console.log(env);


app.listen(env.PORT, () => {
    console.log(`Server started on port `+env.PORT);
});