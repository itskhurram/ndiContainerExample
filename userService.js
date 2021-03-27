'use strict';
module.exports = class UserService {
  constructor(repo) {
    this.userRepository = repo.userRepository;
  }
  getUsers = () => {
    return this.userRepository.getUsers();
  };
  getByEmail = (email) => {
    return this.userRepository.getByEmail(email);
  };
  saveUser = (user) => {
    this.userRepository.saveUser(user);
  };
  getUsersAsync = async () => {
    return await this.userRepository.getUsersAsync();
  };
  getByEmailAsync = async (email) => {
    return this.userRepository.getByEmailAsync(email);
  };
  saveUserAsync = async (user) => {
    await this.userRepository.saveUserAsync(user);
  };
};
