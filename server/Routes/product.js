const express = require("express");
const {read, list, create, update, remove} = require("../Controllers/product");
const {auth} = require("../Middleware/auth");
const {upload} = require("../Middleware/upload");
const router = express.Router();

router.get("/product", list);
router.get("/product/:id", read);
router.post("/product", upload, create);
router.put("/product/:id", upload, update);
router.delete("/product/:id", remove);

module.exports = router;
