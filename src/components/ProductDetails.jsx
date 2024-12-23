import React from 'react';

const ProductDetails = ({ name, price, quantity, onIncrementQuantity, onDecrementQuantity }) => (
  <div className="basketRow grid grid-flow-col auto-cols-max gap-x-6">
    <div className='w-32 h-32 bg-gray-200 rounded-md' />
    <div className='flex flex-col gap-y-2'>
      <h2>{name}</h2>
      <p className='text-lg font-semibold'>£ {price.toFixed(2)}</p>
      <div className='flex gap-x-2 mt-auto'>
        <button className='quantityButton' onClick={onIncrementQuantity}>+</button>
        <span>{quantity}</span>
        <button className='quantityButton' onClick={onDecrementQuantity} disabled={quantity === 1}>-</button>
      </div>
    </div>
  </div>
)

export default ProductDetails;
