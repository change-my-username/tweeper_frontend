import React from 'react';
 
import classes from './SignForm.css' 

import SignUpButton from '../../../utils/signButton'
import Input from '../../../utils/Input'
import { addUserToStore } from '../../../../state/ducks/user/actions'

import { axios_server } from '../../../../axios/axios'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
 
class SignUpForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        isLoading: false,
        
        nameError: {
            isOccured: false, 
            text: ''
        },

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

    nameHandler = (e) => {
        this.setState({ name: e.target.value },  () => {
            // console.log(this.state)
        })
    
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

        if(this.state.name.includes(' ')) {
            return this.setState({                                      
                nameError: {
                    isOccured: true, 
                    text: 'Name should be without spaces'
                }
            })

        }

        //ОЧЕНЬ ПЛОХО дальше идет асинхронный запрос axios
        this.setState({                                      
            passwordError: {isOccured: false, text: ''},
            emailError: {isOccured: false, text: ''},
            nameError: {isOccured: false, text: ''},
        })

        axios_server.post('/user/signup', 
            {
                name: this.state.name, 
                email: this.state.email,
                password: this.state.password,
            }
        ).then(({data}) => 
            {
                // this.setState((prevState) => {
                //     return {
                //         isLoading: !prevState.isLoading,
                //     }
                // })
               
                localStorage.setItem("token", data.token)
                
                this.props.dispatch(addUserToStore(data.user))

                this.props.history.push('/home')

                // window.location.reload();
            })
            .catch((err) => {   // err ПУСТОЙ (не всегда)!!! нужно юзать err.response 
               
                if(err.response && err.response.data)
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
                        case 'name':
                            this.setState({nameError: {
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

                {this.state.passwordError.isOccured ?
                    
                    <div className={classes.Error}>
                        {this.state.passwordError.text}
                    </div> 
                    
                    : null
                }
                    
                {this.state.emailError.isOccured ?
                    <div className={classes.Error}>
                        {this.state.emailError.text}
                    </div> 
                    
                    : null
                }

                {this.state.nameError.isOccured ?
                    <div className={classes.Error}>
                        {this.state.nameError.text}
                    </div> 
                    
                    : null
                }

                <Input  onChange={this.nameHandler}     
                        value={this.state.name} 
                        name="name" 
                        type="text" 
                        customizeLabel={classes.Label} 
                        className={classes.Input} 
                        inputName="Имя"/>  

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

                
                <SignUpButton className={classes.SignButton}> Зарегистрироваться </SignUpButton>
                
               
            </form> 

            
    
        )

        
    }
}
 
export default withRouter(connect()(SignUpForm))