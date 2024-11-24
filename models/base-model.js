const { ObjectId } = require('mongodb');
const { connectContactsCollection} = require('../configs/db-config');
const contact = require('./contact-schema');
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

baseModel.insertContact = async function(data){
    const contacts = await connectContactsCollection();
    const newContact = new contact({
        birthday: data.birthday,
        email: data.email,
        favoriteColor: data.favoriteColor,
        firstName: data.firstName,
        lastName: data.lastName
    });
    const savedContact = await contacts.insertOne(newContact);

    return savedContact.insertedId;
}

baseModel.updateContact = async function(id, data){
    try {
        const contacts = await connectContactsCollection();
        const filter = {_id: new ObjectId(id)};
        const updateData = {
            $set: {
                birthday: data.birthday,
                email: data.email,
                favoriteColor: data.favoriteColor,
                firstName: data.firstName,
                lastName: data.lastName
            }
        }

        const result = await contacts.updateOne(filter, updateData);

        if (result.matchedCount === 0) {
            console.log('No data been updated.');

        } else {
            console.log('Updated successfully:', result.modifiedCount);
        }
    } catch (error) {
        console.error('update data failed - ', error); 
    }
}


baseModel.deleteContactById = async function(id){
    const contacts = await connectContactsCollection();
    const filter = {_id: new ObjectId(id)};
    const result = await contacts.deleteOne(filter);

    return result;
}


module.exports = baseModel;