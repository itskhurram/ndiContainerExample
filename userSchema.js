'user strict';

module.exports = class UserSchema {
  constructor(object) {
    this.mongoose = object.configureDatabase.getMongoose();
    const schemaOptions = {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    };
    const userSchema = new this.mongoose.Schema(
      {
        userName: {
          type: String,
          required: true,
        },
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
      schemaOptions
    );
    return this.mongoose.model('user', userSchema);
  }
  //   getUserSchema = () => {
  //     const schemaOptions = {
  //       timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  //     };
  //     const userSchema = new this.mongoose.Schema(
  //       {
  //         userName: {
  //           type: String,
  //           required: true,
  //         },
  //         firstName: {
  //           type: String,
  //           required: true,
  //         },
  //         lastName: {
  //           type: String,
  //           required: true,
  //         },
  //         email: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //       schemaOptions
  //     );
  //     return this.mongoose.model('user', userSchema);
  //   };
};
