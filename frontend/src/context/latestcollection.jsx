import React, { useContext, useEffect, useState } from 'react';
import { shopcontext } from './shopcontext';
import title from '../components/title';
import productitem from '../components/productitem';

const latestCollection = () => {
  const { products } = useContext(shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]); // Add products as dependency

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 gap-y-6'>
        {latestProducts.map((item, index) => (
          <productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default latestCollection
