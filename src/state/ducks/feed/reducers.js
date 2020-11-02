import * as types from './types'

const initState = {
    feed_id: '',
    tweets: []
}

const feedReducer = (state = initState, action) => {
    
    switch (action.type) {
        case types.ADD_TWEET:
            return {
                feed_id: state.feed_id,
                tweets: [action.payload, ...state.tweets]
            }

        case types.LIKE_TWEET:
            const { tweet_id, user_id } = action.payload

            const updatedTweets = state.tweets.map( tweet => {

                if(tweet.id === tweet_id){

                    const user_who_liked_index = tweet.who_liked.indexOf(user_id) 
                    

                    if(user_who_liked_index === -1) {
                        tweet.likes++
                        tweet.who_liked.push(user_id)
                    } else {
                        tweet.likes--
                        tweet.who_liked.splice(user_who_liked_index, 1)
                    }
    
                   
                }
                return tweet
            })

            return {
                feed_id: state.feed_id,
                tweets: [...updatedTweets]
            }

        case types.SEND_FEED: {
            return state;
        }

        case types.ADD_FEED_TO_STORE:
            
           
            return {
                feed_id: action.payload._id,
                tweets: [...action.payload.tweets]
            }
            
        // case types.UPLOAD_FEED:
            
        //     if(state.tweets.length === 0)
        //         return {
        //             feed_id: action.payload._id,
        //             tweets: [...action.payload.tweets]
        //         }
        //     return state;
                
    
        default:
            return state;
            
    }
}



export default feedReducer;