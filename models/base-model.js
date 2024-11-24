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
    const newContact = new contact({
        birthday: data.birthday,
        email: data.email,
        favoriteColor: data.favoriteColor,
        firstName: data.firstName,
        lastName: data.lastName
    });

    const savedContact = await newContact.save();

    return savedContact.id;
}

baseModel.updateContact = async function(data){
    const filter = {id: new ObjectId(data.id)};
    // const contacts = await connectContactsCollection();
    const updateData = {
        $set: {
            birthday: data.birthday,
            email: data.email,
            favoriteColor: data.favoriteColor,
            firstName: data.firstName,
            lastName: data.lastName
        }
    }

    const updateContact = await contact.updateOne(filter, updateData);

    return updateContact;
}


baseModel.deleteContactById = async function(id){
    // const contacts = await connectContactsCollection();
    const result = await contact.findByIdAndDelete(id);

    // const result = await contacts.deleteOne({id: new ObjectId(id)});
    return result;
}


module.exports = baseModel;