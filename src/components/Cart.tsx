import React, { useState, useContext } from 'react'
import ProductsData from "./ProductsData"
import {ShopContext} from "./shop-context"


const Cart: React.FC = () => {
  type Props = {
    id: number;
    name: string;
    price: string;
    image: string
}

  const [products]: any = useState(ProductsData)
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)


  return (
    <>

      <h1 className='flex items-center justify-center font-bold mt-6 mb-10'>Your Cart Items</h1>
        <div className=" sm:grid sm:grid-cols-3 sm:gap-4 items-center justify-center">
          {products.map((product: Props) => {

            if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id} className="flex items-center m-5" >
                <div>
                  <img className="w-48" src={product.image} alt="" />
                </div>
                <div className='flex flex-col p-5'>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <div className='flex'>
                  <button onClick={() => removeFromCart(product.id)} className='mr-2'> - </button>
                  <input className='w-10 text-center' value={cartItems[product.id]} />
                  <button onClick={() => addToCart(product.id)} className='ml-2'> + </button>
                </div>
              </div>
            )
          }

                                            })}

        </div>
    </>
  )
}

export default Cart