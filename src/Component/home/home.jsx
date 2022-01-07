import { Link} from "react-router-dom";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../style/style.module.css'
// import { FetchApi} from '../api/apiRequest';
// import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Home() {
  const [inputvalue,setInputValue]=useState("")
  // const dispach=useDispatch();
   function  handleRequest(){
    //  console.log("in function")
    if(!inputvalue)
    alert("please enter something..")
   
  //  dispach(FetchApi(inputvalue));   
  }
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={styles.inputHolder}>
            <TextField id="outlined-basic" label="search any git repo" variant="outlined" 
            value={inputvalue}
            onChange={(e)=>setInputValue(e.target.value)}
      className={styles.inputFiled}/>

<Link to={inputvalue?`/search/q=${inputvalue}`:`/`} className={styles.navLink}>
<Button variant="contained" color="primary" className={styles.inputButton}
      onClick={()=>handleRequest()}>
              Search
     </Button>
    </Link> 

     
        </div>
      
    </form>
  );
}
