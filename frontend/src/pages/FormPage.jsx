import { useState } from 'react';
import React from 'react';

import { postAPI } from '../services/cardAPI';

function FormPage() {

  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [response, setResponse] = useState('');
  const [invalidCard, setInvalidCard] = useState();

const checkCardInfo = async (e) => {
  e.preventDefault();
  const obj = {
    pan: cardNumber,
    cvv: cvv,
    month: expiryMonth,
    year: expiryYear
  }
  const resp = await postAPI(obj);
  console.log(resp)
  setResponse(resp.message)
  if(resp.type === 400) {
    setInvalidCard(true)
  }
}

  return (
    <main>
      <form>
        <label htmlFor="cardNumber">
          <input 
          id='cardNumber'
          type="text" 
          name="cardNumber"
          value={cardNumber}
          placeholder='card number'
          onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label htmlFor="expiryMonth">
        <input 
          id='expiryMonth'
          type="text" 
          name="expiryMonth"
          value={expiryMonth}
          minLength={2}
          maxLength={2}
          placeholder='MM'
          onChange={(e) => setExpiryMonth(e.target.value)}
          />
        </label>
        <label htmlFor="expiryYear">
        <input 
          id='expiryYear'
          type="text" 
          name="expiryYear"
          value={expiryYear}
          minLength={4}
          maxLength={4}
          placeholder='YYYY'
          onChange={(e) => setExpiryYear(e.target.value)}
          />
        </label>
        <label htmlFor="cvv">
        <input 
          id='cvv'
          type="text" 
          name="cvv"
          value={cvv}
          placeholder='CVV'
          onChange={(e) => setCvv(e.target.value)}
          />
        </label>

        <button
        type='submit'
        onClick={checkCardInfo}       >
          Submit
        </button>
      </form>
      {/* {invalidCard && (
        <div data-testid="common_login__element-invalid-email">
          Login Inválido
        </div>
      )} */}
      { response && (
        <div> {response}</div>
      )}
    </main>
  )
    }

export default FormPage;