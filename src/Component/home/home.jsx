import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../style/style.module.css'
import { getRepo } from '../api/apiRequest';
import { useDispatch } from 'react-redux';
import { GetRepo } from '../../redux/repoSearch/action/action';
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
  const dispach=useDispatch();
   function  handleRequest(){
    getRepo(inputvalue).then((res)=>{
      // console.log(res);
      dispach(GetRepo(res.data.items))
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={styles.inputHolder}>
            <TextField id="outlined-basic" label="search any git repo" variant="outlined" 
            value={inputvalue}
            onChange={(e)=>setInputValue(e.target.value)}
      className={styles.inputFiled}/>

<Link to="/search" className={styles.navLink}>
<Button variant="contained" color="primary" className={styles.inputButton}
      onClick={()=>handleRequest()}>
              Search
     </Button>
    </Link> 

     
        </div>
      
    </form>
  );
}
