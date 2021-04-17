const insertURL = (value) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("urls");
      let url = { url: value };
      dbo.collection("customers").insertOne(url, function(err, res) {
        if (err) throw err;
        return "1 document inserted";
        db.close();
      });
    });
}

module.exports = {
    insertURL
}