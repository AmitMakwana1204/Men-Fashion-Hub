import Home from './Pages/Home'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shirt from './Pages/Shirt';
import Pent from './Pages/Pent';

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shirt' element={<Shirt />}></Route>
        <Route path='/Pent' element={<Pent />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
