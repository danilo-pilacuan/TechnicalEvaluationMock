import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/atoms/button/button';
import Dropdown from './components/atoms/dropdown/dropdown';
import Logo from './components/atoms/logo/logo';
import Menu from './components/molecules/menu/menu';
import Navbar from './components/organisms/navbar/navbar';
import Mock from './components/templates/mock/mock';
import imgTop from './image_top.png'
import imgWaves from './waves.svg'
function App() {
  return (
    <div className="App">
        <Mock/>
        <img src={imgTop} className='imTop'/>
        <div className='waves'></div>
    </div>
  );
}

export default App;
