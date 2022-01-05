import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../style/style.module.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={styles.inputHolder}>
            <TextField id="outlined-basic" label="search any git repo" variant="outlined" 
      className={styles.inputFiled}/>
      <Button variant="contained" color="primary" className={styles.inputButton}>
              Search
     </Button>
        </div>
      
    </form>
  );
}
