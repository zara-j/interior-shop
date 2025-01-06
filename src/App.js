
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CartMain from './pages/cart/CartMain';
import Checkout from './pages/cart/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartMain />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
