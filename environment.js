'use strict';
const dotenv = require('dotenv');
module.exports = class Environment {
  constructor() {
    dotenv.config();
    this.PORT = process.env.PORT || 9000;
    this.URL = process.env.URL || 'http://localhost';
    this.DATABASE_URI = process.env.DATABASE_URI || '';
  }
};
