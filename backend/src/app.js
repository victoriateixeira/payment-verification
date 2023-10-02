const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

const paymentController = require('./PaymentController');

app.post('/verification', paymentController.validateDetails);

module.exports = app;
