import React from 'react';

const SwitchButton = (props) =>
{
    return(
        <div className="text-center mb-3">
          <button type="button " className="btn btn-info mt-2" onClick={props.switchSumit}>
            Switch to {props.isSignIn ? 'SignIn' : 'Register'}
          </button>
        </div>
    )
}

export default SwitchButton;