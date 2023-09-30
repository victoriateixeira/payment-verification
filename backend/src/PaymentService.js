
const validateDetails = (date, cvv, pan) => {
  const valDate = validateDate(date);
  if (valDate.type) return valDate;

  const valCvv = validateCvv(cvv, pan);
  if (valCvv.type) return valCvv;

  const valPan = validatePan(pan);
  if (valPan.type) return valPan;

  return {type: null, message: 'Success! Card information is valid.'}
  
}

const validateDate = (date) => {
const dateInput = new Date(date).getTime
const currDate = new Date()
if (currDate < dateInput) {
  return {type: 404, message: 'Card expiry date is not valid'}
}
return {type: null, message:''}
}

const validateCvv = (cvv, pan) => {
  const isAmex = isAmex(pan)
  if(!isAmex) {
    if(cvv.length !== 3) {
      return {type: 404, message: 'CVV not valid'}
    }
    return {type: null, message:''}
  }
  else {
    if(cvv.length !== 4) {
      return {type: 404, message: 'CVV not valid'}
    }
    return {type: null, message:''}
  }
  
}
const validatePan = (pan) => {
if( pan.length >= 16 && pan.length <= 19) {
  return {type: null, message:''}
}
  return {type: 404, message: 'PAN not valid'}
}

const isAmex = (pan) => {
  if(pan.startsWith('34') || pan.startsWith('37') ) {
    return true
  }
  return false

}

module.exports = {validateDetails}
