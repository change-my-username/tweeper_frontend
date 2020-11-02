import React from 'react';


import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';

import classes from './Modal.css'

import SignInForm from './Forms/SignInForm'

const Modal = (props) => { 

    

    if(props.isVisible){
        return (
            <div  className={classes.Backdrop}>
                <div className={classes.Modal}>
                    <button onClick={props.closeModal} className={classes.CloseModal}>
                        <CloseIcon/>
                    </button>

                    <TwitterIcon fontSize="large" className={classes.TwitterIcon} />

                    <SignInForm />

                </div>
            </div>
        )
    }
    return null;
}
 
export default Modal