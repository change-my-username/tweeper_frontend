import * as types  from './types' 
import { axios_server } from '../../../axios/axios'


const addCurrentUser = (user) => {
    return {
        type: types.ADD_CURRENT_USER,
        payload: user
    }
}

const getCurrentUser = (current_user) => {
    
    return dispatch => {

        dispatch({type: types.LOADING_CURRENT_USER})

        axios_server.get(`/${current_user}`, {headers: {authorization: localStorage.getItem("token")}}).then(({data}) => {
            const user = data
            
            if(user)
                dispatch(addCurrentUser(user))

        }).catch((err) => {
            console.log(err)
        })
    }
}


const Follow = (user) => {
    return dispatch => {

        dispatch({type: types.LOADING_FOLLOW })

        axios_server.post('/user/follow', user, {headers: {authorization: localStorage.getItem("token")}}).then( ({data}) => {
            dispatch({
                type: types.FOLLOW,
                payload: data

            })
        })
    }
}

const Unfollow = (user) => {
    return dispatch => {

        dispatch({type: types.LOADING_UNFOLLOW})

        axios_server.post('/user/unfollow', user, {headers: {authorization: localStorage.getItem("token")}}).then( ({data}) => {
            dispatch({
                type: types.UNFOLLOW,
                payload: data
            })
        })
    }

}

const clearCurrentUser  = () => {
    return {
        type: types.CLEAR_CURRENT_USER,
        payload: null
    }
}

export  {
    getCurrentUser,
    Follow,
    Unfollow,
    clearCurrentUser,
}


