import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Homee from './components/Home';
import ShopContextProvider from './components/shop-context';

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/products" element={<Cart />}></Route>
            <Route path="/" element={<Homee />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
