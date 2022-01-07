import { FETCHING_REPO, FETCH_REPO_FALIURE, FETCH_REPO_SUCCESS } from "../action/actionType";



const initialState={
    item:[],
    loading:false,
    error:null,
    totalpages:1
};
function repoReducer(state=initialState,{type,payload,error}){
    console.log(payload)
    switch (type){
        case FETCHING_REPO:{
            return {
                ...state,
                item:[],
                loading:true,
                error:null
            }
        }
        case FETCH_REPO_SUCCESS:{
            return{
                ...state,
                loading:false,
                item:payload.items,
                totalpages:payload.total_count
            }
        }
        case FETCH_REPO_FALIURE:{
            return{
                ...state,
                loading:false,
                error:error
            }
        }
        default:{
            return state;
        }
    }
}
export default repoReducer;