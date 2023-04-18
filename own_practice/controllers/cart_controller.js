const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { getProducts, addProducts, deleteProducts, addQuantity, deleteAllCart,addOrder} = require("../models/cart");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function getcartProduct(req, res) {
	const { userid } = req.body;
	getProducts(userid).then((data) => {
		res.send(data);
	});
}
function addcartProduct(req, res) {
	const { userid, productid, amount, discount } = req.body;
	addProducts(userid, productid, amount, discount).then((data) => {
		res.send(data);
	});
}
function deletecartProduct(req, res) {
	const { userid, productid } = req.body;
	deleteProducts(userid, productid).then((data) => {
		res.send(data);
	});
}

function UpdateQuantity(req, res) {
    const { userid, productid, quantity } = req.body;
    addQuantity(userid, productid, quantity).then((result) => {
      res.send(result);
    });
}
  
function deleteCart(req, res) {
	// const { userid } = req.body;
	console.log(req.body)
	const { userid, info, amount } = req.body.data;
	console.log(userid)
    console.log("meta data",info)
    addOrder(info,userid,amount).then((value)=>{
        deleteAllCart(userid).then((data)=>{
            res.send(data)
        })
    })
}




module.exports = {
	getcartProduct,
	addcartProduct,
    deletecartProduct,
	UpdateQuantity,
	deleteCart
	
};
