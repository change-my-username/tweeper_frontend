import React from 'react';

import classes from './SignUp.css'

import TwitterIcon from '@material-ui/icons/Twitter';

import SignButton from '../../utils/signButton'

import ModalSignIn from '../Modals/ModalSignIn'
import ModalSignUp from '../Modals/ModalSignUp'


 
class SignUp extends React.Component { 

    state = {
        isModalSignIn: false,
        isModalSignUp: false,
    }

    toggleModal = (modalName) => {
        switch (modalName) {
            case 'signIn':
                this.setState((prevState) => {
                    return {
                    isModalSignIn: !prevState.isModalSignIn,
                    }
                })
                break;
            case 'signUp':

                this.setState((prevState) => {
                    return {
                    isModalSignUp: !prevState.isModalSignUp
                    }
                })

                break;
            default:
                break;
        }
    }



    render () {
        return (
            <div className={classes.SignUp}> 
                <TwitterIcon fontSize='large' className={classes.TwitterIcon} />
                <h1 className={classes.Title}> Узнайте, что происходит в мире прямо сейчас </h1>

                <strong className={classes.JoinUs}>Присоединяйтесь к Твиттеру прямо сейчас!</strong>

                <SignButton onClick={this.toggleModal.bind(this, 'signUp')} className={classes.SignUpButton}>Зарегистрироваться</SignButton>
                <SignButton onClick={this.toggleModal.bind(this, 'signIn')} className={classes.SignInButton}>Войти</SignButton>

                <ModalSignIn closeModal={this.toggleModal.bind(this, 'signIn')} isVisible={this.state.isModalSignIn} />
                <ModalSignUp closeModal={this.toggleModal.bind(this, 'signUp')} isVisible={this.state.isModalSignUp} />
            </div>
        )
    }
}
 
export default SignUp