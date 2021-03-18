'user strict';

module.exports = class MongooseUser {
  constructor(_databaseConfiguration) {
    this.databaseConfiguration = _databaseConfiguration;
  }
  getUserSchema = () => {
    const schemaOptions = {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    };
    const userSchema = new this.databaseConfiguration.Schema(
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
    return this.databaseConfiguration.model('user', userSchema);
  };
};
