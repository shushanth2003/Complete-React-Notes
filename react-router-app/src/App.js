import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Register from './Components/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
