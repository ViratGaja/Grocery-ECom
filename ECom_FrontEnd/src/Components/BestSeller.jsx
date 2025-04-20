// BestSeller.jsx
import React from 'react';
import ProductCart from './ProductCart';
import { useAppContext } from '../Context/Context';

const BestSeller = () => {
  const { Products } = useAppContext(); // Fixed: Products not products, and added () to invoke the function
  
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
      {Products && Products.length > 0 && (
        <ProductCart product={Products[0]} />
      )}
    </div>
  );
};

export default BestSeller;