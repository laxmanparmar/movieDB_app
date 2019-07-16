import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar =(props)=>
{
    return(
      <div className="navbarc">
            <input type="checkbox" id="navbarc-check"/>
                <div className="navbarc-header">
                    <div className="navbarc-title">
                        <Logo />
                    </div>
                </div>
        <div className="navbarc-btn">
            <label htmlFor="navbarc-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
  
         <div className="navbarc-links">
            {
                !props.isAutheticate ?
                <Navigation path="auth">Authenticate</Navigation>
                : <Navigation path="logout">Logout</Navigation>
            }
         </div>
     </div>
    )   
}

export default NavBar;