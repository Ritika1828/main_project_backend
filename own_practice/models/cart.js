const uuid = require("uuid");
const knex = require("../libraris/db")
function getProducts(userid) {
  

  return knex
    .raw(
      'SELECT * FROM products p inner JOIN cart c on p.id=c."productid" where c."userid"=?',
      [userid]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => console.log(error));
};


function addProducts(userid,productid,amount,discount){
    const createdat = Date.now()
    const updatedat = Date.now()
    const quantity = 1
    
    return knex("cart").insert({userid,productid,amount,quantity,createdat,updatedat,discount}).returning("*");
}
function deleteProducts(userid,productid){
  return knex("cart")
    .where({ userid, productid })
    .del()
    .returning("*");
}


function addQuantity(userid, productid,quantity) {
    return knex.raw(
      "update cart set quantity=? where userid=? and productid=?",
      [quantity,userid, productid]
    );
}
  
function deleteAllCart(userid) {
  console.log({ userid })
  return knex("cart")
    .where({ userid })
    .del()
    .returning("*");
}

function addOrder(info,userid,amount){
  const meta = JSON.stringify(info)
  const id = uuid.v4()
  // const amount = amount
  const createdat =  new Date().getTime()
  const updatedat =  new Date().getTime()
  const orderstatus = "delievered"
  const paymentstatus = "success"
   return knex("orders").insert({id,userid,amount,meta,orderstatus,paymentstatus,createdat,updatedat}).returning("*")
}
    



module.exports = { getProducts, addProducts, deleteProducts, addQuantity, deleteAllCart,addOrder };