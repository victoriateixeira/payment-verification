
const isAmex = (pan) => {
  if(pan.startsWith('34') || pan.startsWith('37') ) {
    return true
  }
  return false

}

const validateDetails = (month, year, cvv, pan) => {
  const valDate = validateDate(month, year);
  if (valDate.type) return valDate;

  const valCvv = validateCvv(cvv, pan);
  if (valCvv.type) return valCvv;

  const valPan = validatePan(pan);
  if (valPan.type) return valPan;

  return {type: 200, message: 'Success! Card information is valid.'}
  
}



const validateDate = (month, year) => {
const currDateYear = new Date().getFullYear()
console.log(currDateYear)
console.log(Number(year))
const currDateMonth = new Date().getMonth()
console.log(currDateMonth)
console.log(Number(month))
if ((currDateYear > Number(year)) || ((currDateYear === Number(year)) && currDateMonth > Number(month)) ){
  return {type: 400, message: 'Card expiry date is not valid'}
}
return {type: null, message:''}
}

const validateCvv = (cvv, pan) => {
  const isCardAmex = isAmex(pan)
  if(!isCardAmex) {
    if(cvv.length !== 3) {
      return {type: 400, message: 'CVV not valid'}
    }
    return {type: null, message:''}
  }
  else {
    if(cvv.length !== 4) {
      return {type: 400, message: 'CVV not valid'}
    }
    return {type: null, message:''}
  }
  
}
const validatePan = (pan) => {
if( pan.length >= 16 && pan.length <= 19) {
  return {type: null, message:''}
}
  return {type: 400, message: 'PAN not valid'}
}



module.exports = {validateDetails}
