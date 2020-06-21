const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://nodeComplete:rYX7GHW1EobK0XFw@node-complete-5hx8z.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("CONNECTED");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb =()=>{
  if(_db){
    return _db;
  }
  throw 'no database found!'
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
