// const initialState=0;
// const incDrc=(state=initialState,action)=>{
//         switch(action.type){
//             case "INCREMENT": return state+action.payload




//             case "DECREMENT": return state-action.payload;
//             default :return state;
//         }
// }
// export default incDrc;
import { DECREMENT, INCREMENT } from "../actions/actionType";
const initialState=0;
function upDown(state=initialState,{type,payload}) {
    switch(type){
        case INCREMENT:{
            return state+payload  ;         
        }
        case DECREMENT:{
            return state-payload;
        }
        default:{
            return state;
        }
    }
}

export default upDown;