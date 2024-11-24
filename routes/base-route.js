const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/base-constoller');


router.get('/', baseController.getContacts);
router.get('/getContactById', baseController.getContactById);

router.post('/create', baseController.addContact);

router.put('/update/:id', baseController.updateContact);

router.delete('/delete/:id', baseController.deleteContact);
 
module.exports = router;