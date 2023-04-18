// const {insertOrderDetail} = require('../models/order')
// const { v4: uuidv4 } = require("uuid");


// function OrderDetail (req, res) {
//     const { userid, amount } = req.body;
//     const id = uuidv4();
    
//     const row = insertOrderDetail(id , userid, amount).postUserOrderDetails(rowFields);
  
//     if (row) {
//         res.status(201).json({ status: "success", message: "order placed",id });
//       }
//      else {
//       res.status(501).json({ status: "fail", message: "failed to place order" });
//     }
// };
  
// module.exports={OrderDetail}