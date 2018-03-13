import {
    Current_Post, 
    All_Posts
} from '../actions'

let initStat = {
    currentPost: {},
    allPosts: []
}

function postReducer(state = initStat, action){
    switch (action.type) {
        case Current_Post:
            return {...state, currentPost: action.payload}

        case All_Posts:
            return {...state, allPosts: action.payload}

        default:
            return state
    }
}




export default postReducer
