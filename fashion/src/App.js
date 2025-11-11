import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <routes>
      <route path=" /" exact={true} Component={<Home/>} />
    </routes>
    </BrowserRouter>
    </>
  );
}

export default App;
