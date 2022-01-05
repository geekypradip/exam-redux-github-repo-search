// import rootReducer from "./index";
// import  {createStore}  from "redux";
// const Store=createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default Store;

import { createStore } from "redux";
import rootReducer from "./combineReducers";

const Store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default Store;