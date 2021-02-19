var express = require('express');
var router = express.Router();

const userRouter = require("./user.routes") ;
const transactionRouter = require("./transaction.routes") ;

const app = express();

app.use('/users',userRouter);
app.use('/transactions',transactionRouter);

module.exports = app;