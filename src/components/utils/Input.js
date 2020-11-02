import React from 'react';

import classes from './Input.css'
 
const Input = (props) => { 
    return (
        <label className={[classes.Label, props.customizeLabel].join(' ')}>

            <div className={classes.LabelText}>{props.inputName}</div>

            <input onChange={props.onChange} name={props.name} type={props.type} className={[classes.Input, props.className].join(' ')}/>

        </label>
       
    )
}
 
export default Input