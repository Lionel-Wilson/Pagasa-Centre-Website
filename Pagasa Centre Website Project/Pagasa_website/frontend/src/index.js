import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './scss/index.scss';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Nav from '././components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);