import * as types from './types'
import { axios_server } from '../../../axios/axios'


const addUsersToStore = (users) => {
    return {
        type: types.ADD_USERS,
        payload: users,
    }
}

const getUsers = () => {
    return (dispatch, getState) => {
        axios_server.get('/users', {headers: {authorization: localStorage.getItem("token")}}).then(({data}) => {
            const users = data

            dispatch(addUsersToStore(users))
            
        }).catch((err) => {
            console.log("getAllUsers err")
        })
    }
}

const searchUser = (user) => {
    return {
        type: types.SEARCH_USER,
        payload: user
    }
}


export {
    getUsers,
    searchUser
}