import { GETREPO } from "./actionType"

export const GetRepo=(query)=>{
    return{
        type:GETREPO,
        payload:query
    }
}