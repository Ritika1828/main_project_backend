const db = require('../libraris/db');


const getListOfProducts = ()=>{
    return new Promise((resolve, reject) => {
        db("products")
            .select("*")
            .then((rows) => {
                console.log('products', rows)
                resolve(rows)
            }).catch(err => {
                reject(err);

            })
    })
};




const getListOfProductsById = (id) => {
    return new Promise((resolve, reject) => {
        db("products")
            .select("*")
            .where({ id })
            .then((rows) => {
                resolve(rows)
            }).catch(err => {
                reject(err);
            })
        
    })
}




module.exports = { getListOfProducts, getListOfProductsById };


