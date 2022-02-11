const { MongoClient } = require("mongodb");
let { connectionString, dbName } = require("./dbConfig");

async function testConnection() {
  try {
    let connection = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let db = connection.db(dbName);
    let numCollections = (await db.collections()).length;
    return numCollections > 0;
  } catch (ex) {
    return false;
  }
}
module.exports.testConnection = testConnection;

async function findData(collectionName, filter) {
  try {
    let connection = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let db = connection.db(dbName);
    let collection = db.collection(collectionName);
    let cursor = collection.find(filter);
    let result = [];
    let currentDocument = await cursor.next();
    while (currentDocument) {
      result.push(currentDocument);
      currentDocument = await cursor.next();
    }
    console.log(result);
    return result;
  } catch (ex) {
    return null;
  }
}

module.exports.findData = findData;

/*async function main() {
  const uri =
    "mongodb+srv://shimy:shimy1986@shimypractice.ypq4j.mongodb.net/shimyPractice?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();

    await findOneListingByName(client, "challenge@alkemy.org");*/

/*await createListing(client, {
      email: "challenge@alkemy.org ",
      password: "react",
      nombre: "challenge",
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("shimyPractice")
    .collection("loginfos")
    .findOne({ email: nameOfListing });

  if (result) {
    console.log(`Found '${nameOfListing}'`);
  } else {
    console.log(`No listing found with '${nameOfListing}`);
  }
}

async function createListing(client, newListing) {
  const result = await client
    .db("shimyPractice")
    .collection("loginfos")
    .insertOne(newListing);

  console.log(result);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.email}`));
}

module.exports.findOneListingByName = findOneListingByName;

*/
