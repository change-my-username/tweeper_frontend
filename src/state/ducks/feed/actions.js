import * as types  from './types' 
import { axios_server } from '../../../axios/axios'

const likeTweet = (tweet, user_id) => {
    
    return dispatch => {

        dispatch ({
            type: types.LIKE_TWEET,
            payload: {
                tweet_id: tweet.id,
                user_id
            },
        })

        axios_server.put('/feed', tweet, {headers: {authorization: localStorage.getItem("token")}})
            .then(({data}) => {
                
                
        }).catch((err) => {
            console.log(err);
        })
    }
}

const sendFeed = (tweets) => {
    return dispatch => {
        
        dispatch({type: types.SEND_FEED})

        axios_server.post('/updateFeeds', tweets, {headers: {authorization: localStorage.getItem("token")}})
            .then(() => {
                
                
            }).catch((err) => {
                console.log(err);
            })
    }
}

const addTweet = (tweet) => {
    return dispatch => {
        axios_server.post('/feed', tweet, {headers: {authorization: localStorage.getItem("token")}})
            .then(({data}) => {
                dispatch ({
                    type: types.ADD_TWEET,
                    payload: data,
                })
                
        }).catch((err) => {
            console.log(err);
        })
    }
}

const addFeedToStore = (feed) => {
    return {
        type: types.ADD_FEED_TO_STORE,
        payload: feed,
    }   
}

const getFeed = (user) => {

    return dispatch => {
        user = user ? user : ''
        axios_server.get(`/feed/${user}`, {headers: {authorization: localStorage.getItem("token")}}).then(({data}) => {
            
            const feed = data.feed;
        
            dispatch(addFeedToStore(feed))

        }).catch((err) => {
            console.log(err)
        })
    }
}

export  {
    addTweet,
    likeTweet,
    addFeedToStore,
    getFeed,
    sendFeed,
}


