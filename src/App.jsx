import React, { useState } from 'react'
import ProductDetails from './components/ProductDetails'
import { calculateSubtotal, calculateVAT } from './utils/basket-table'

function App() {
  const [itemsInBasket, setItemsInBasket] = useState([
    { id: crypto.randomUUID(), productName: 'Lasagne Al Forno', price: 15.50, quantity: 1 },
    { id: crypto.randomUUID(), productName: 'Garlic Ciabatta', price: 2.49, quantity: 1 },
    { id: crypto.randomUUID(), productName: 'White Chocolate & Raspberry Cheesecake', price: 8.50, quantity: 1 },
  ]);

  const subtotal = calculateSubtotal(itemsInBasket);
  const vat = calculateVAT(subtotal);

  const handleQuantityChange = (id, quantity, { increment }) => () => {
    setItemsInBasket((prevItemsInBasket) => {
      return prevItemsInBasket.map((item) => {
        if (item.id !== id) return item;

        return { ...item, quantity: increment ? quantity + 1 : quantity - 1 }
      });
    });
  }

  return (
    <main>
      <div className="grid gap-y-4 w-1/2 mx-auto py-10">
        <div className="basketRow flex gap-x-1">
          <h1 className='text-2xl font-semibold'>My Basket
          </h1>
          <p className="text-sm text-slate-700 pt-2">({itemsInBasket.length})</p>
        </div>
        {itemsInBasket.map((item) => (
          <ProductDetails
            key={item.id}
            name={item.productName}
            price={item.price}
            quantity={item.quantity}
            onIncrementQuantity={handleQuantityChange(item.id, item.quantity, { increment: true })}
            onDecrementQuantity={handleQuantityChange(item.id, item.quantity, { increment: false })}
          />
        ))}
        <div className='basketRow flex flex-col gap-y-2'>
          <p className='text-xl'>VAT <span className='pl-6'>{vat.toFixed(2)}</span></p>
          <p className='text-xl'>Sub Total <span className='pl-6'>{subtotal}</span></p>
          <hr className='border-slate-500' />
          <p className='text-xl font-semibold'>Basket Total <span className='pl-6'>{(subtotal + vat).toFixed(2)}</span></p>
        </div>
      </div>
    </main>
  )
}

export default App
