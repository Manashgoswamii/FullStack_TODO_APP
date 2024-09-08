const express = require('express');

const app = express();
const cors= require('cors');
require("./connection/connection.js");
const auth= require("./routers/auth.js");
const list= require("./routers/list.js");


app.use(express.json());
app.use(cors());


app.use("/api/v1", auth);
app.use("/api/v2", list);
app.listen(1001,() => {
  console.log('Server is running on port 1001');
})