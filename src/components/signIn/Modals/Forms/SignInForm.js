import React from 'react';
 
import classes from './SignForm.css' 

import SignInButton from '../../../utils/signButton'
import Input from '../../../utils/Input'
import { addUserToStore } from '../../../../state/ducks/user/actions'

import { axios_server } from '../../../../axios/axios'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

 
class SignInForm extends React.Component {

    state = {
        email: '',
        password: '',

        emailError: {
            isOccured: false,
            text: ''
        },

        passwordError: {
            isOccured: false,
            text: ''
        },

        unknownError: {
            isOccured: false,
            text: ''
        },

    }

    emailHandler = (e) => {
        this.setState({ email: e.target.value },  () => {
            // console.log(this.state)
        })
       
    }

    passwordHandler = (e) => {
        this.setState({ password: e.target.value },  () => {
            // console.log(this.state)
        })
       
    }

    submitForm = (e) => {
        e.preventDefault()

        //ОЧЕНЬ ПЛОХО дальше идет асинхронный запрос axios
        this.setState({                                      
            passwordError: {isOccured: false, text: ''},
            emailError: {isOccured: false, text: ''},
        })

        axios_server.post('/user/signin', 
            {
                email: this.state.email,
                password: this.state.password
            }
        ).then(({data}) => 
            {
                localStorage.setItem("token", data.token)
                
                this.props.dispatch(addUserToStore(data.user))

                this.props.history.push('/home')
                // window.location.reload();
            }
            ).catch((err) => {
                if(err.response.data)
                {
                    switch (err.response.data.type) {
                        case 'email':
                            this.setState({emailError: {
                                    isOccured: true,
                                    text: err.response.data.text
                                }
                            })
                            
                            break;
                        case 'password':
                            this.setState({passwordError: {
                                    isOccured: true,
                                    text: err.response.data.text
                                }
                            })
                            
                            break;
                        case 'unknown':
                            this.setState({unknownError: {
                                    isOccured: true,
                                    text: err.response.data.text
                                }
                            })
                            
                            break;
                    
                        default:
                        
                            break;
                    }

                }else {
                    console.log(err);
                }

                
            })
        }
    
    render() {
        return (
            <form onSubmit={this.submitForm} className={classes.SignForm}>
                     
                {this.state.emailError.isOccured ?
                    <div className={classes.Error}>
                        {this.state.emailError.text}
                    </div> 

                    : null
                }

                {this.state.passwordError.isOccured ?
                    <div className={classes.Error}>
                        {this.state.passwordError.text}
                    </div> 

                    : null
                }
               
                <Input  onChange={this.emailHandler}    
                        value={this.state.email} 
                        name="email" 
                        type="text" 
                        customizeLabel={classes.Label} 
                        className={classes.Input} 
                        inputName="Электронная почта"/>

                <Input  onChange={this.passwordHandler} 
                        value={this.state.password} 
                        name="password" 
                        type="password" 
                        customizeLabel={classes.Label} 
                        className={classes.Input} 
                        inputName="Пароль"/>


                <SignInButton className={classes.SignButton}> Войти </SignInButton>
                
               
            </form> 
    
        )        
    }
}
 


export default withRouter(connect()(SignInForm))
