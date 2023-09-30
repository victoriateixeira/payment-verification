const paymentService = require('./PaymentService')

const validateDetails = async (req, res) => {
  
  const {date, cvv, pan} = req.body;
  const isCardValid = paymentService.validateDetails(date, cvv, pan);
  return res.status(isCardValid.type).json(isCardValid.message)

};

module.exports = {validateDetails}