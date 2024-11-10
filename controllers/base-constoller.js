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

module.exports = baseController;