const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://nodeComplete:rYX7GHW1EobK0XFw@node-complete-5hx8z.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("CONNECTED");
      cb(result);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;