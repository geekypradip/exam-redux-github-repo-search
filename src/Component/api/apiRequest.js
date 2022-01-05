import axios from "axios"
export  const  getRepo=(query)=>{
   
     return   axios.get(`https://api.github.com/search/repositories?q=${query}&page=0&per_page=4`)
}