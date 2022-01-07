// import rootReducer from "./index";
// import  {createStore}  from "redux";
// const Store=createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default Store;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./combineReducers";
import  thunk  from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
const Store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default Store;