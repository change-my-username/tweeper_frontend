const initState = {
    user_to_find: '',
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return { user_to_find: state.user_to_find, 
                     users: [...action.payload]
                    }

        case "SEARCH_USER":
            return { user_to_find: action.payload, 
                     users: [...state.users]
                    }
            
            
    
        default:
            return state;
           
    }

}

export default usersReducer
