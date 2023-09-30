const express = require ('express')

const app = express()
app.use(express.json());
const paymentController = require('./PaymentController')

app.post('/verification', paymentController.validateDetails)

module.exports = app