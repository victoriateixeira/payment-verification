
const isAmex = (pan) => {
  if(pan.startsWith('34') || pan.startsWith('37') ) {
    return true
  }
  return false

}

const validateDetails = (month, year, cvv, pan) => {
  const valDate = validateDate(month, year);
  if (valDate) return valDate;

  const valCvv = validateCvv(cvv, pan);
  if (valCvv) return valCvv;

  const valPan = validatePan(pan);
  if (valPan) return valPan;

  const checkLastDigit = checkDigit(pan);
  if(!checkLastDigit) return {valid: false, message: 'PAN not valid'}

  return {valid: true, message: 'Card information is valid.'}
  
}



const validateDate = (month, year) => {
const currDateYear = new Date().getFullYear()
const currDateMonth = new Date().getMonth() + 1
if ((currDateYear > Number(year)) || ((currDateYear === Number(year)) && currDateMonth >= Number(month)) ){
  return {valid: false, message: 'Card expiry date is not valid'}
}
}

const validateCvv = (cvv, pan) => {
  const isCardAmex = isAmex(pan)
  if(!isCardAmex) {
    if(cvv.length !== 3) {
      return {valid: false, message: 'CVV not valid'}
    }
  }
  else {
    if(cvv.length !== 4) {
      return {valid: false, message: 'CVV not valid'}
    }
  }
  
}
const validatePan = (pan) => {
if( pan.length < 16 || pan.length > 19) {
  return {valid: false, message: 'PAN not valid'}
}
 
}

const checkDigit = (pan) => {
 
    let sum = 0;
    let isEven = false;
  
    for (let i = pan.length-1; i >=0; i-=1) {
      let digit = parseInt(pan.charAt(i), 10);
  
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      isEven = !isEven;
    }
    return (sum % 10) === 0;
  }
 
  


module.exports = {validateDetails}
