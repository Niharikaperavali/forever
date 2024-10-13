import React, { useContext } from 'react';
import { shopcontext } from '../context/shopcontext';
import { Link } from 'react-router-dom';

const productitem = ({ id, image, name, price }) => {
    const { currency } = useContext(shopcontext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  );
};


export default productitem
