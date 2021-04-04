import {
    SET_RECENT_POST,
    SET_RESULTS_POST
} from '../actions/types'

const INIT_STATE = {
    resultsPosts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action){
    switch(action.type){
        case SET_RECENT_POST:
            const recentPosts = action.payload;
            return {
                ...state, 
                recentPosts
            };
        case SET_RESULTS_POST:
            const resultsPosts = action.payload;
            return {
                ...state, 
                resultsPosts
            };

        default:
            return state;
    }
}