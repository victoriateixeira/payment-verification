const express = require ('express')

const app = express()
app.use(express.json());
const paymentController = require('./PaymentController')

app.get('/verification', paymentController.validateDetails)

module.exports = app