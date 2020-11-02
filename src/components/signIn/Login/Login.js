import React from 'react';

import classes from './Login.css'

import SignInButton from '../../utils/signButton'

import Input from '../../utils/Input'

const AuthForm = (props) => { 
    return (

        <form className={classes.Login}>
            
            <Input type="email" inputName="Электронная почта"/>
            <Input type="password" inputName="Пароль"/>
        
            <SignInButton type="submit" >Войти</SignInButton>

        </form>

        
    )
}
 
export default AuthForm