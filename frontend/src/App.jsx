import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import ReturnPolicy from './pages/ReturnPolicy'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/return" element={<ReturnPolicy />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App