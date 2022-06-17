import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Why Vision Bank??</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/security.jpg'
              text='Assured Security for your Money'
            />
            <CardItem
              src='images/atm.jpg'
              text='Easy Withdrawal of Money'
            />
            <CardItem
              src='images/moneyTransfer.jpg'
              text='Smooth Transactions'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;