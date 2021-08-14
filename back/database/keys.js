module.exports = {
    mongodb: {
        //URI: 'mongodb://localhost:27017/login-node'
        URI: "mongodb+srv://develop:develop@clusterdb.u0zio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
};


/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://develop:<password>@clusterdb.u0zio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/