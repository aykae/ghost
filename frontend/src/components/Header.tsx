import React from 'react'
import MetaMask from '../assets/metamasklogo.png';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='menu-icon'>
      </div>
      <div className='header-left'>
      </div>
      <div className='header-right'>
        <img src={MetaMask} alt="Logo" className="metamask-logo"/>
      </div>
    </header>
  );
};