import Home from './Pages/Home'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shirt from './Pages/Shirt';
import Pent from './Pages/Pent';
import Login from './Pages/login';
import Signup from './Pages/Signup';

function App() {

  return (
      <Router>
        <Navbar/>
        <Signup/>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shirt' element={<Shirt />}></Route>
        <Route path='/Pent' element={<Pent />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        </Routes>
      </Router>
  );
}

export default App;
