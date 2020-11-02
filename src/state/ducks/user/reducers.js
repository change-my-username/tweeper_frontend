import * as types from './types'

const initState = {
    avatar: "https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png",
    name: "",

    follows: {
        users: [],
        count: 0
    },

    followers: {
        users: [],
        count: 0
    },

    isLoading: true,

    
}

const userReducer = (state = initState, action) => {
    
    switch (action.type) {

        case types.ADD_USER_TO_STORE:
                
            return {
                ...action.payload,
                isLoading: false,
                
            }
            
        case types.LOADING_USER: 
            return {
                ...state,
                isLoading: true
            }

        // case types.USER_ERROR: 
        //     console.log("USER_ERROR", action.payload)
        //     return state;
    
        default:
            return state;
    }

}

export default userReducer
