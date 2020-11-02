import * as types from './types'

const initState = {
    name: '',
    follows: {
        users: [],
        count: 0
    },

    followers: {
        users: [],
        count: 0
    },
    
    feed: {
        feed_id: '',
        tweets: []
    },


    isLoading: true,

}

const currentUserReducer = (state = initState, action) => {
   
    switch (action.type) {
        case types.ADD_CURRENT_USER:
            return {
                    ...action.payload,
                    isLoading: false,
                    
            };

        case types.FOLLOW:
            
            return {
                    
                    ...action.payload,
                    isLoading: false,
                   
            };

        case types.UNFOLLOW:
            return {
                   
                    ...action.payload,
                    isLoading: false,
                
            };

        case types.LOADING_CURRENT_USER: 
            return {
                ...state,
                isLoading: true
            }

        case types.LOADING_FOLLOW: 
            return {
                ...state,
                isLoading: true
            }
            
        case types.LOADING_UNFOLLOW: 
            return {
                ...state,
                isLoading: true
            }
        

        case types.CLEAR_CURRENT_USER:
            return initState

        default:
            return state;
    }
}



export default currentUserReducer;