use testdb;
db.testCollection.insertOne({ "type": "Building", "name": "Eiffel Tower"});
db.testCollection.find({});