const paymentService = require('./PaymentService')

const validateDetails = async (req, res) => {

  const {month, year, cvv, pan} = req.body;
  const isCardValid = paymentService.validateDetails(month, year, cvv, pan);
  return res.status(isCardValid.type).json(isCardValid.message)

};

module.exports = {validateDetails}