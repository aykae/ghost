import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

 import MetaMask from './metamasklogo.png';

 interface HeaderProps {
    OpenSidebar: () => void; // Assuming OpenSidebar is a function that returns nothing
  }

  
function Header({OpenSidebar}: HeaderProps) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        </div>
        <div className='header-right'>
        <img src={MetaMask} alt="Logo" className="metamask-logo"/>
        </div>
    </header>
  )
}

export default Header