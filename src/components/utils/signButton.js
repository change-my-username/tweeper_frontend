import React from 'react';

import classes from './signButton.css'
 
const SignButton = (props) => { 
    return (
        <button onClick={props.onClick} className={[classes.SignButton, props.className].join(' ')} type={props.type}> {props.children} </button>
    )
}
 
export default SignButton
