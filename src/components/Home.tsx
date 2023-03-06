import React, { useContext, useState } from 'react'
import ProductsData from './ProductsData'
import {ShopContext} from "./shop-context"


const Homee: React.FC = () => {
    type Props = {
        id: number;
        name: string;
        price: string;
        image: string
    }

    const [products]: any = useState(ProductsData)

    const [searchTerm, setSearchTerm] = useState("")


    const { addToCart, cartItems, removeFromCart } = useContext<any>(ShopContext)
        return (
    <>
        <div>
          <input className='ml-5 mt-5 border rounded p-2' type="text" placeholder='Search for product' onChange={(event) => {setSearchTerm(event.target.value)}} />
        </div>
        <h1 className='flex items-center justify-center font-bold mt-6 mb-10'>Products</h1>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 items-center justify-center">

            {products.filter((val: any) => {
                if(searchTerm === ""){
                    return val
                }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((product: Props) => {
            const cartItemAmount = cartItems[product.id]
                return(
        <div key={product.id} className="flex flex-col items-center justify-center">
            <h3 className='font-bold mt-6'>{product.name}</h3>
            <h4 className='font-bold'>{product.price}</h4>
            <img className="w-40" src={product.image} alt={product.name}/>
            <button onClick={() => addToCart(product.id)} className='text-white bg-yellow-300 w-24 rounded mt-4'>
                Add {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            <button onClick={() => removeFromCart(product.id)} className='text-white bg-yellow-300 w-24 rounded mt-4'>Remove</button>
        </div>

            )})}

        </div>
    </>
            )
        }

export default Homee