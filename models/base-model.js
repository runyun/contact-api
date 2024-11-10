const { ObjectId } = require('mongodb');
const { connectContactsCollection} = require('../configs/db-config');
const baseModel = {};


baseModel.getContacts = async function(){
    try {
        const contacts = await connectContactsCollection();
        const allData = await contacts.find({}).toArray();

        return allData;

    } catch (error) {
        console.error('error when get contacts data - ', error);
    }
}

baseModel.getContactById = async function (id) {
    try {
        const contacts = await connectContactsCollection();
        const contact = await contacts.findOne({_id:new ObjectId(id)});

        return contact;

    } catch (error) {
        
    } 
}

module.exports = baseModel;