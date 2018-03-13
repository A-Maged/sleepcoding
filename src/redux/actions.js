/*
|----------------
| Action Creators
|----------------
*/


export const Current_Post = 'Current_Post'
export const All_Posts = 'All_Posts'


export function currentPostAction(payload){
    return {
        type: Current_Post,
        payload
    }
}

export function allPostsAction(payload){
    return {
        type: All_Posts,
        payload
    }
}
