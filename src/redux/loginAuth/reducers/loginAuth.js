import { LOGINENABLE } from "../actions/actionType";

const initialAuth=false;
function LoginAuth(state=initialAuth,{type}){
    switch(type){
        case LOGINENABLE:{
            state=true
            return state;
        }
        default:{
            return state;
        }
    }
}
export default LoginAuth;