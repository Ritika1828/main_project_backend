const { getListOfProducts ,getListOfProductsById } = require('../models/products');




const getProducts = async (req, res) => {
    console.log("ok");
    const data = getListOfProducts()
        .then((data) => {
        res.status(200).send({
            data: data,
            message: "data fetched successfully"
        })
            
        }).catch((err) => {
        res.status(400);
        console.log("error");
    })
        
}

const getProductDetailById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(422).json({
                success: false,
                data: null,
                msg: 'Id is missing'
            })
        }
        const data = await getListOfProductsById(id)
        if (!data) {
            res.status(400).json({
                success: false,
                data: data,
            })
        }
        console.log("data", data)
        res.status(200).json({
            success: true,
            data: data
        })
    }
    catch (err) {
        res.status(400).json(err)
    }
}





module.exports = { getProducts, getProductDetailById };


