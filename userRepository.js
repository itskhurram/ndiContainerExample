'use strict';

module.exports = class UserRepository {
  constructor(_databaseConfiguration) {
    this.databaseConfiguration = _databaseConfiguration;
  }
  getUsers = () => {
    return this.databaseConfiguration.find();
  };
  getByEmail = (email) => {
    return this.databaseConfiguration.findOne({ email: email });
  };
  saveUser = (user) => {
    const schemaUser = new userSchema(user);
    schemaUser.save(schemaUser);
  };
  getUsersAsync = async () => {
    return await this.databaseConfiguration.find();
  };
  getByEmailAsync = async (email) => {
    return this.databaseConfiguration.findOne({ email: email });
  };
  saveUserAsync = async (user) => {
    const schemaUser = new userSchema(user);
    await this.databaseConfiguration.save(schemaUser);
  };
};
