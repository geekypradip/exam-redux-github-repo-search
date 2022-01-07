// import incDrc from "./counter/reducers/updown";
// import { combineReducers } from "redux";
// const rootReducer=combineReducers({
//     count:incDrc
// })
// export default rootReducer;

import { combineReducers } from "redux";
import upDown from "./counter/reducers/updown";
import LoginAuth from "./loginAuth/reducers/loginAuth";
import repoReducer from "./repoSearch/reducer/fetchRepo"

// console.log(handleTodo)
const rootReducer=combineReducers({
    counter:upDown,
    loginAuth:LoginAuth,
    gitrepo:repoReducer
    
})
export default rootReducer;