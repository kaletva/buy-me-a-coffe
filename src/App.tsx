import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import {
  Routes,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/buy-me-a-coffe" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/buy-me-a-coffe/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
