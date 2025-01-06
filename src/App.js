
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CartHeader from './pages/cart/CartHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartHeader />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
