import React from 'react';
 
import classes from './Modal.css' 
import CloseIcon from '@material-ui/icons/Close';

import SubmitButton from '../../utils/signButton'

import { changeAvatar } from '../../../state/ducks/user/actions'

import { connect } from 'react-redux'

 
class Modal extends React.Component { 

    

    fileUploadHandler = (e) => {
        console.log(e.target.files[0])
    }

    changeAvatarHandler = (e) => {
        e.preventDefault()
        // this.props.dispatch(changeAvatar())

    }

    render() {
            return (
                <div  className={classes.Backdrop}>
                    <div className={classes.Modal}>
                        <button onClick={this.props.closeModal} className={classes.CloseModal}>
                            <CloseIcon/>
                        </button>

                        <form >
                            {/* <label for="img">Аватар:</label> */}
                            
                            <input onChange={this.fileUploadHandler} type="file" accept="image/*"/>
                            <SubmitButton onClick={this.changeAvatarHandler}>Применить</SubmitButton>
                        </form>

                    </div>
                </div>
            )
        }
}
 
export default connect()(Modal)