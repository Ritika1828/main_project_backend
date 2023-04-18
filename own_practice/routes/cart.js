const express = require("express");
const app = express();
const router = express.Router();
const cartController = require("../controllers/cart_controller");
router.post("/cart", cartController.getcartProduct);
router.post("/cartadd", cartController.addcartProduct);
router.post("/cartdeleteitem", cartController.deletecartProduct);
router.post("/updateQuantity", cartController.UpdateQuantity)
router.post("/deleteAllCart", cartController.deleteCart)
module.exports = router;
