import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import ShopCategories from './pages/shopcategories';
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shirts" element={<ShopCategories category="Shirt" />} />
      <Route path="/Pents" element={<ShopCategories category="Pent" />} />
      <Route path="/product" element={<Product />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
