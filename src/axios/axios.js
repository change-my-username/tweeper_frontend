import axios from 'axios'

const axios_server = axios.create({
    baseURL:"https://tweeper.herokuapp.com",

});


export {
    axios_server,
}