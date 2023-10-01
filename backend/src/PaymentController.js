const paymentService = require('./PaymentService')

const validateDetails = async (req, res) => {

  const {month, year, cvv, pan} = req.body;
  const isCardValid = paymentService.validateDetails(month, year, cvv, pan);
  return res.status(200).json({message:isCardValid.message, type:isCardValid.type})

};

module.exports = {validateDetails}