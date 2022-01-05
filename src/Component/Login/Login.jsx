import styles from '../style/style.module.css'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { EnableAuth } from '../../redux/loginAuth/actions/action';
import { useSelector } from "react-redux";
import Home from '../home/home';
function Login() {
    let authChecker=useSelector((state)=>state.loginAuth)
    const loginDispatcher=useDispatch();
    if(authChecker){
        return (
            <Home/>
        )
    }
    return ( 
        <div className={styles.loginHolder}>
            <Button variant="contained" color="primary"
            onClick={()=>loginDispatcher(EnableAuth())}>
                Login
            </Button>
        </div>
        
     );
}

export default Login;