import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Rental from './pages/Rental/index';
import './app.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
