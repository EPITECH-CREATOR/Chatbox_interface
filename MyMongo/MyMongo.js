

class MyMongo
{
  constructor(url, dbname) {
    this.url = url;
    this.db = dbname;
    this.m_mongo = require('mongodb')
    this.mongoClient = this.m_mongo.MongoClient;
  }

  createCollection(nameCollection) {
    this.mongoClient.connect(
      this.url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("CREATOR");
        dbo.collection(nameCollection, (err, db) => {
          if (err) throw err;
          console.log("collection"+ nameCollection + "created");
        });
        db.close();
      }
    );
  }

  insertOneDataUser(user, nameCollection) {
    this.mongoClient.connect(
      this.url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("CREATOR");
        dbo.collection(nameCollection).insertOne(user, (err, db) => {
          if (err) throw err;
          console.log("Data correctly Insert");
        });
        db.close();
      }
    );
  }
}

module.exports = MyMongo
