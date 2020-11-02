import {combineReducers} from "redux"

import feedReducer from './feed'
import userReducer from './user'
import usersReducer from './users'
import currentUserReducer from './current_user'


const rootReducer = combineReducers({
    feed: feedReducer,
    user: userReducer,
    users: usersReducer,
    current_user: currentUserReducer,
})

export default rootReducer;