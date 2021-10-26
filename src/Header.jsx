import React from "react";
import logo from './Images/logo.png';

const Header = () =>{
    return(<>
    <div className='header'>
        <img src={logo} alt='logo' width='60' height='50'className='img' />
        <h1>Notes</h1>

    </div>
    </>);
}

export default Header;