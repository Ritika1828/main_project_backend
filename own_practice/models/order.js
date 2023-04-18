// const knex = require("../libraris/db");

// function insertOrderDetails(id, userid, amount) {
//       const createdat = Date.now()
//       const orderStatus="success"
//       const paymentStatus="success"
//     return db("orders")
//         .insert({ id, userid, amount,orderStatus, paymentStatus, createdat})
//         .then((result) => {
//         console.log(result)
//        return result.rowCount
//     })
//     .catch((error) => console.log(error));
// }
// module.exports={insertOrderDetails}