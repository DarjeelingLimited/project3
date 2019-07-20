const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, require: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;