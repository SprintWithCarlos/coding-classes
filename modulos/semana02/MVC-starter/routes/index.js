const express = require('express');

const router = express.Router();
const controller = require('../controllers/');

router.get('/', controller.getList);
router.get('/posts/:id', controller.getDetail);
module.exports = router;
