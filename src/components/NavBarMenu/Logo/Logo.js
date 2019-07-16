import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import logoMedia from '../../../assets/images/logo.svg';

const Logo = ()=>{
    return(
       <Aux >
       <img src={logoMedia}  alt="MyBurger" style={{height:'30px'}}/> 
       </Aux>
        
        )
}

export default Logo;