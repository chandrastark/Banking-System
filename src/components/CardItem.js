import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to=''>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='myImage'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 className='cards__item__text'>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;