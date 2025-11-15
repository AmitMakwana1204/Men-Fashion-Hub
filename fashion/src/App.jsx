import Home from './Pages/Home'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shirt from './pages/Shirt';
import Pent from './Pages/Pent';
import Login from './Pages/login';
import SignupForm from './Pages/SignupForm';
import cart from './pages/cart';

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shirt' element={<Shirt />}></Route>
        <Route path='/Pent' element={<Pent />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signupForm' element={<SignupForm/>}></Route>
        <Route path='/cart' element={<cart/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
