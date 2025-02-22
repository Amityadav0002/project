import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Page/Login';
import Registor from './Page/Registor';
import Mylanding from './Dashboard/Mylanding'
import Navbar from './Dashboard/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>  
      <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path="registration" element={<Registor />}></Route>
        <Route path="landing" element={<Mylanding />}></Route>
        <Route path='' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
