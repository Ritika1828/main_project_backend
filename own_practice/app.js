const express = require('express');
const bodyParser = require("body-parser");
const index = require('./routes/index')
const cors = require("cors");
const routes = require('./routes');
const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false,
 }));
//app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*"}));
app.use("/", routes);

app.listen(8000, function (err) {
    if (err) {
        console.log("ERROR", err)
    }
    console.log(`listening on port 8000`);
})