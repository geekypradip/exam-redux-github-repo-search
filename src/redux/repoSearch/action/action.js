

// export const GetRepo=(query)=>{
//     return{
//         type:GETREPO,
//         payload:query
//     }
// }

import { FETCHING_REPO, FETCH_REPO_FALIURE, FETCH_REPO_SUCCESS } from "./actionType"



export  const FetchingRepo=()=>{
    return{
        type:FETCHING_REPO
    }
}
export  const FetchRepoSuccess=(payload)=>{
    return{
        type:FETCH_REPO_SUCCESS,
        payload:payload
    }
}
export const FetchRepoFaliure=(error)=>{
    return{
        type:FETCH_REPO_FALIURE,
        error:error
    }
}