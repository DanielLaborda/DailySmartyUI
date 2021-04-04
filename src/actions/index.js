import { 
    SET_RECENT_POST,
    SET_RESULTS_POST 
} from './types.js';
import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        //perform our request in here
        axios.get('https://api.dailysmarty.com/posts').then(response => {
            dispatch({
                type: SET_RECENT_POST,
                payload: response.data.posts
            })
        }).catch(error => {
            console.log("error api", error);
        })
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
        //perform our request in here
        axios.get(`https://api.dailysmarty.com/search?q=${query}`).then(response => {
            dispatch({
                type: SET_RESULTS_POST,
                payload: response.data.posts
            });
            if(callback) { callback(); }
        }).catch(error => {
            console.log("error api", error);
        })
    }
}