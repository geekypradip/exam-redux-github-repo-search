import { GETREPO } from "../action/actionType";


const initialState=[];
function GetRepo(state=initialState,{type,payload}){
    console.log(payload)
    switch (type){
        case GETREPO:{
            state=payload
            return state;
        }
        default:{
            return state;
        }
    }
}
export default GetRepo;