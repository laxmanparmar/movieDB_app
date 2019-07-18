import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';
const Navigation = (props)=>
{
    return (
        <Aux>
            <NavLink to={"/"+props.path} exact={props.exact} >{props.children}</NavLink>
        </Aux>
        
    )
}

export default Navigation;