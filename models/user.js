const getDb = require("../util/database").getDb;

const mongodb = require("mongodb");

class User {
  constructor(userName, email, cart, id) {
    this.userName = userName;
    this.email = email;
    this.cart = cart; //{items:[]}
    this._id = id;
  }
  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  addToCart(product) {
    // const cartProduct = this.cat.items.findIndex((p) => p._id === product._id);

    const updatedCart = { items: [{ productId: new mongodb.ObjectId(product._id), quantity: 1 }] };
    const db = getDb();
    return db.collection("users").findOne(
      { _id: new mongodb.ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
