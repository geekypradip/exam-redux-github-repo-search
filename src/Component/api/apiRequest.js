import axios from "axios"
import { FetchingRepo, FetchRepoFaliure, FetchRepoSuccess} from "../../redux/repoSearch/action/action";
export  const  FetchApi=(query,page)=>{
     return async (dispach)=>{

          dispach(FetchingRepo()); //loading..
          try{

               const responce= await axios.get(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=10`);
               console.log(responce);
               localStorage.setItem("totalPage",responce.data.total_count)
          dispach(FetchRepoSuccess(responce.data))//success

          }catch(error){
               dispach(FetchRepoFaliure(error))//error
          }


          
     }
   
     // return   axios.get(`https://api.github.com/search/repositories?q=${query}&page=0&per_page=10`)
}