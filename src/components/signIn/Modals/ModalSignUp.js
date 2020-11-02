import React from 'react';
 
import classes from './Modal.css' 

import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';

import SignUpForm from './Forms/SignUpForm'

 
const ModalSignUp = (props) => { 

    if(props.isVisible){
        return (
            <div  className={classes.Backdrop}>
                    <div className={classes.Modal}>
                        <button onClick={props.closeModal} className={classes.CloseModal}>
                            <CloseIcon/>
                        </button>

                        <TwitterIcon fontSize="large" className={classes.TwitterIcon} />

                        <SignUpForm />

                        {/* <form className={classes.SignForm}>

                            <Input type="text" customizeLabel={classes.Label} className={classes.Input} inputName="Имя"/>    
                            <Input type="email" customizeLabel={classes.Label} className={classes.Input} inputName="Электронная почта"/>
                            <Input type="password" customizeLabel={classes.Label} className={classes.Input} inputName="Пароль"/>

                            <SignUpButton type="submit" onClick={registerUser}  className={classes.SignInButton}> Зарегистрироваться </SignUpButton>
                        </form>                     */}

                    </div>
                </div>
        )
    }
    return null;
}
 
export default ModalSignUp