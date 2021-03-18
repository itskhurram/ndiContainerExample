"use strict";
module.exports = class UserController {
  constructor(_userService) {
    this.userService = _userService;
  }
  getUsers = (httpRequest, httpResponse, next) => {
    this.userService .getUsers().then((result) => {
      httpResponse.json(result);
    });
  };
  getByEmail = (httpRequest, httpResponse, next) => {
    return this.userService.getByEmail(email).then((result)=>{
        httpResponse.json(result);
    });
  };
  saveUser = (httpRequest, httpResponse, next) => {
    this.userRepository.saveUser(user);
  };
  getUsersAsync = async (httpRequest, httpResponse, next) => {
    const users =  await this.userService.getUsersAsync();
    return httpResponse.json(users);
  };
  getByEmailAsync = async (httpRequest, httpResponse, next) => {
    const user =  this.userService.getByEmailAsync(email);
    return httpResponse.json(user);

  };
  saveUserAsync = async (httpRequest, httpResponse, next) => {
    await this.userService.saveUserAsync(user);
  };
};
