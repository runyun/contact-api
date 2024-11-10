const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/base-constoller');

router.get('/', baseController.getContacts);
router.get('/getContactById', baseController.getContactById);

module.exports = router;