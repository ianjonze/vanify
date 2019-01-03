//SET UP REQUIRED 

const express = require("express");
const app = express();
const mongodb = require("./server/config")

//EXPRESS MIDDLEWARE

app.use(express.json())
app.use('/api/products', products)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
