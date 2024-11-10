const {MongoClient} = require('mongodb');

const uri = process.env.CONNECT_STRING;
const client = new MongoClient(uri);

async function connectContactsCollection() {
    try {

        await client.connect();

        const db = client.db('cse341');
        const collection = db.collection("contacts");
        return collection;

    } catch (error) {
        console.error('failed to connect to the db - ', error);

    } 
}

module.exports = {connectContactsCollection};