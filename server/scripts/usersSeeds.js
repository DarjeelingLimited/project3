const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const UsersSeed = [
  {
    first_name: "test",
    last_name: "testy",
    username: "tester",
    email: "testy@tester.com",
    password: "123"
  },

db.goBananas
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

