const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useFindAndModify', false);
const uri = "mongodb+srv://develop:Passw0rd123@clusterdb.u0zio.mongodb.net/easyspeaker?retryWrites=true&w=majority";

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

    
 /*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://develop:<password>@clusterdb.u0zio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
   