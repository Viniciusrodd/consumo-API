

const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require('cors');


app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use("/",router);



app.listen(8686,() => {
    console.log("Server running")
});
