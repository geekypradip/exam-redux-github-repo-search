import { Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import Home from "../home/home";
import Search from "../search/search";


function RouteControll() {
    // const {id}=useParams()
    // console.log(id)
  let authChecker=useSelector((state)=>state.loginAuth)
console.log(authChecker)
       if(authChecker){

         return (  
        
           <Switch>
               <Route exact path="/">
                  <Home/>
               </Route>
               <Route exact path="/login">
                   <Login/>
               </Route>
               <Route exact path="/search/q=:query">
                 <Search/>
               </Route>
               <Route>
                 <div>Page Not Found</div>
               </Route>
           </Switch>
       
    );
       }
       else{
           return(
               <Login/>
           )
       }
       
   }

export default RouteControll;