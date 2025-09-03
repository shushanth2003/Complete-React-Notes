import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Main from './Components/Main'
import User1 from './Components/User1'
import User2 from './Components/User2';
import Newbooks from './Components/Books/Newbooks';
import Oldbooks from './Components/Books/Oldbooks';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Auth/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Main></Main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/User1/:id' element={<User1/>}/>
        <Route path='/User2/:id' element={<User2/>}/>
        <Route path='/book'>
          <Route path='newbook'element={<Newbooks/>}/>
          <Route path='oldbook' element={<Oldbooks/>}/>
        </Route>
        <Route path='/auth'>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
