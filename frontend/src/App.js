
import './App.css';

import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './commonComponents/Error';
import { Signup } from './components/signUp/Signup';
import { AboutPage } from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import { SupportPage } from './pages/SupportPage';
import Navbar from './commonComponents/Navbar';
import Footer from './commonComponents/Footer';
function App() {
  return (
    <>
      <BrowserRouter >
    <Navbar />

        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
