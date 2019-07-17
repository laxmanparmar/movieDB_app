import React from 'react';

const Alert = (props)=>
{
    return(
        <div className="alert alert-warning mt-1">
            {props.msg}
        </div>
    )
}

export default Alert;