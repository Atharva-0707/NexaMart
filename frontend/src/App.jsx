import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'

import Cart from './pages/Cart';
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

            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/return" element={<ReturnPolicy />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App