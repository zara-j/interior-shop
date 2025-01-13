
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CartMain from './pages/cart/CartMain';
import CheckOut from './pages/checkout/CheckOut';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
