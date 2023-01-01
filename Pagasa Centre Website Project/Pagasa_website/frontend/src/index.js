import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <br></br>
    <br></br>
    <br></br>
    <Card main_text="WELCOME TO PAG-ASA CENTRE" sub_text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." button_text="JOIN SERVICE" />
    <br></br>
    <br></br>
    <br></br>
    <Card main_text="NEW HERE? CONNECT WITH US!" sub_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" button_text="CONNECT ME" />
    <br></br>
    <br></br>
    <br></br>
    <Card main_text="CH_RCH IS NOT COMPLETE WITHOUT U" sub_text="We invite you to participate in one of our cells and meetings so that you may be transformed through a special message that Jesus has for you." button_text="SUNDAY CELLEBRATION" />
  </React.StrictMode>
);