import * as types from './types'
import { axios_server } from '../../../axios/axios'

const addUserToStore = (user) => {
    return {
        type: types.ADD_USER_TO_STORE,
        payload: user,
    }
}


const getUser = ()  => {
    return (dispatch, getState) => {

        dispatch({type: types.LOADING_USER})
       
        axios_server.get('/user', {headers: {authorization: localStorage.getItem("token")}}).then(({data}) => {

            dispatch({
                type: types.ADD_USER_TO_STORE,
                payload: data.user,
            })

        }).catch((err) => {
            console.log(err)
            // dispatch({
            //     type: types.USER_ERROR,
            //     payload: err.response,
            // })
        })
        
    }
}


const changeAvatar = (avatar) => {

}

export {
    addUserToStore,
    getUser,
    changeAvatar,
   
}