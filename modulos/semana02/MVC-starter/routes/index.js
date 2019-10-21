const express = require('express');

const router = express.Router();
const controller = require('../controllers/');

router.get('/', controller.getList);
router.get('/posts/:id', controller.getDetail);
router.get('/contact', controller.getContact);
router.get('/about', controller.getAbout);
router.get('/users/:id', controller.getDetailAbout);
router.get('/categorias', controller.getCategorias);
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);
router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);

module.exports = router;
