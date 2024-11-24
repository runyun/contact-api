const baseController = {};
const baseModel = require('../models/base-model');

baseController.getContacts = async function(req, res){
    const result = await baseModel.getContacts();
    
    res.json(result); 
}

baseController.getContactById = async function(req, res){
    const id = req.query.id;
    const result = await baseModel.getContactById(id);

    res.json(result);
}

baseController.addContact = async function(req, res){
    try{
        const {birthday, email, favoriteColor, firstName, lastName,} = req.body;
        // const result = await baseModel.insertContact(data);
        const result = await baseModel.insertContact(req.body);

        res.status(200).send(result);

    }catch(error){
        res.status(500).send('Error adding contact');
        console.error('Error in addContact:', error);
    }
}

baseController.updateContact = async function(req, res){
    try {
        const id = req.params.id;
        const {birthday, email, favoriteColor, firstName, lastName,} = req.body;
        const result = await baseModel.updateContact(id, req.body);

        res.status(200).send(result);
        
    } catch (error) {
        res.status(500).send('Error update contact');
        console.error('Error in updateContact:', error);
    }
}

baseController.deleteContact = async function(req, res){
    try {
        const deleteId = req.params.id;
        const result = await baseModel.deleteContactById(deleteId);

        res.status(200).send(result);
        
    } catch (error) {
        res.status(500).send('Error delete contact');
        console.error('Error in deleteContact:', error);
    }
}


module.exports = baseController;