const express = require('express');
const { postData } = require('../controllers/dataC');
const router = express.Router();

router.post('/post-data', postData);


module.exports = router;