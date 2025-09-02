import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Garbage from './Components/Garbage';
// import Header from './Components/Header';
// import Favoritecar from './Components/Favoritecar'
// import ColorClassComponents from './Components/ColorClassComponents';
// import Scooter from './Components/Scooter.js'
// import TodoList from './Components/TodoList';
// import Form from './Components/Form'
// import Register from './Components/Register';
import Login from './Components/Login.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
