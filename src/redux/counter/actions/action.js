// export const Increment=(number)=>{
//     return{
//         type:"INCREMENT",
//         payload:number
//     }
// }
// export const Decrement=(number)=>{
//     return{
//         type:"DECREMENT",
//         payload:number
//     }

 import { DECREMENT, INCREMENT } from "./actionType";

export const Increment=(number)=>{
    return {
        type:INCREMENT,
        payload:number
    }
}
export const Decrement=(number)=>{
    return{
        type:DECREMENT,
        payload:number
    }
}