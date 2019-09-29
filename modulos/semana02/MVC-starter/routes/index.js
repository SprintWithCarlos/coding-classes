const express = require('express');

const router = express.Router();
const controller = require('../controllers/');

router.get('/', controller.getList);
router.get('/posts/:id', controller.getDetail);
router.get('/users/:link', controller.getUser);
router.get('/about', controller.getUser);
router.get('/contact', controller.getContact);
router.get('/api', controller.getListAPI);
router.patch('/api', controller.getListAPI);
module.exports = router;
