import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import logoMedia from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ()=>{
    return(
       <Aux >
            <Link to="/">
       <img src={logoMedia}  alt="MyBurger" style={{height:'30px'}}/> 
       </Link>
       </Aux>
        
        )
}

export default Logo;