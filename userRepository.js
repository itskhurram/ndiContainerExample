'use strict';

module.exports = class UserRepository {
  constructor(_mongooseUserSchema) {
    this.mongooseUserSchema = _mongooseUserSchema;
  }
  getUsers = () => {
    return this.mongooseUserSchema.find();
  };
  getByEmail = (email) => {
    return this.mongooseUserSchema.findOne({ email: email });
  };
  saveUser = (user) => {
    const schemaUser = new this.mongooseUserSchema(user);
    schemaUser.save(schemaUser);
  };
  getUsersAsync = async () => {
    return await this.mongooseUserSchema.find();
  };
  getByEmailAsync = async (email) => {
    return await this.mongooseUserSchema.findOne({ email: email });
  };
  saveUserAsync = async (user) => {
    const schemaUser = new this.mongooseUserSchema(user);
    await this.mongooseUserSchema.save(schemaUser);
  };
};
