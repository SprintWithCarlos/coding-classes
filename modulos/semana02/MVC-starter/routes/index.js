const express = require("express");

const router = express.Router();
const controller = require("../controllers/");

router.get("/", controller.getList);
router.get("/posts/:id", controller.getDetail);
router.get("/contact", controller.getContact);
router.get("/about", controller.getAbout);
router.get("/users/:id", controller.getDetailAbout);
router.get("/categorias", controller.getCategorias);

module.exports = router;
