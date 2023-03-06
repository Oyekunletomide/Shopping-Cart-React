import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {

  return (
    <div className="h-20 bg-black text-white flex items-center justify-around">
        <Link to="/"><div>Home</div></Link>

        <div>
        <Link to="/products"><img className="w-16 rounded-full cursor-pointer" src="./cart.jpeg" alt=""/></Link>
        </div>
    </div>
  )
}
export default NavBar