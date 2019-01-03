//SET UP REQUIRED MODULES
const express = require("express");
const app = express();
const mongodb = require("./server/config");
const products = require("./server/routes/products");

//EXPRESS ROUTER

app.use(express.json())
app.use('/api/products', products)

// DISPLAY PORT IN CONSOLE

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
