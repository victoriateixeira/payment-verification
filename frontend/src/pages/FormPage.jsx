import {useState} from 'react';
import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './FormPage.css';
import {postAPI} from '../services/cardAPI';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';

function FormPage() {
  const [response, setResponse] = useState('');
  const [invalidCard, setInvalidCard] = useState(false);
  const [validCard, setValidCard] = useState(false);

  const [cardData, setCardData] = useState({
    pan: '',
    expiry: '',
    cvv: '',
  });

  const onInputChange = (event) => {
    const {name, value} = event.target;
    setCardData({...cardData, [name]: value});
  };
  const onCloseButton = () => {
    setInvalidCard(false);
    setValidCard(false);
  };
  const checkCardInfo = async (e) => {
    e.preventDefault();
    const obj = {
      pan: cardData.pan,
      cvv: cardData.cvv,
      month: cardData.expiry.slice(0, 2),
      year: cardData.expiry.slice(3, 7),
    };
    console.log(obj);
    const resp = await postAPI(obj);
    console.log(resp);
    setResponse(resp.message);
    if (!resp.valid) {
      setInvalidCard(true);
      setValidCard(false);
    }
    if (resp.valid) {
      setValidCard(true);
      setInvalidCard(false);
    }
  };

  return (
    <main>
      <Cards
        number={cardData.pan}
        expiry={cardData.expiry}
        cvc={cardData.cvv}
        name='JOHN SMITH'
      />
      <form>
        <label htmlFor='pan'>
          <input
            id='pan'
            type='text'
            name='pan'
            value={cardData.pan}
            placeholder='PAN'
            onChange={onInputChange}
          />
        </label>
        <label htmlFor='expiry'>
          <input
            id='expiry'
            type='text'
            name='expiry'
            value={cardData.expiry}
            minLength={7}
            maxLength={7}
            placeholder='MM/YYYY'
            onChange={onInputChange}
          />
        </label>

        <label htmlFor='cvv'>
          <input
            id='cvv'
            type='text'
            name='cvv'
            value={cardData.cvv}
            placeholder='CVV'
            onChange={onInputChange}
          />
        </label>

        <button type='submit' className='submit-button' onClick={checkCardInfo}>
          CHECK INFO
        </button>
      </form>

      <div className='content'>
        {validCard && (
          <div className='alert alert-success alert-white rounded'>
            <button type='button' className='close' onClick={onCloseButton}>
              ×
            </button>
            <div className='icon'>
              <i>
                <FontAwesomeIcon icon={faCheck} style={{color: '#ffffff'}} />
              </i>
            </div>
            <strong>Success!</strong> {response}
          </div>
        )}
        {invalidCard && (
          <div className='alert alert-danger alert-white rounded'>
            <button type='button' className='close' onClick={onCloseButton}>
              ×
            </button>
            <div className='icon'>
              <i>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  style={{color: '#ffffff'}}
                />
              </i>
            </div>
            <strong>Error!</strong> {response}.
          </div>
        )}
      </div>
    </main>
  );
}

export default FormPage;
