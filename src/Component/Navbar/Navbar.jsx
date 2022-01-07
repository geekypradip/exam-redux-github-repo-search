import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
    let authChecker=useSelector((state)=>state.loginAuth)
  const classes = useStyles();

  return (
    <div className={styles.naV_container}>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
          Git Repo search
          </Typography>
     <Link to="/" className={styles.navLink}>
             <Button color="inherit"> Home  </Button>
    </Link> 
     
      <Link to={authChecker?"/":"/login"} className={styles.navLink}>
          <Button color="inherit">Login</Button>
          
    </Link>    
        </Toolbar>
      </AppBar>
    </div>
    </div>
    
  );
}
