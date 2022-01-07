import styles from "./style.module.css"
import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FetchApi} from '../api/apiRequest';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingScreen from 'react-loading-screen';
import PaginationComponent from "../pagination/pagination";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Search() {
  const dispach=useDispatch();
  const {query}=useParams();
  const [page,setPage]=useState(0)
  useEffect(()=>{
    dispach(FetchApi(query,page))
  },[page])
    const repos=useSelector((state)=>state.gitrepo);
    console.log(repos.loading)
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
let handlePagination=(state)=>{
  //have to do  something...
  if(page!==state)
  setPage(state)
//  console.log(state)
}
  return (

<LoadingScreen
    loading={repos.loading}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    // logoSrc='Octocat.png'
    text='Please Wait'
  > 
   <div className={styles.cardContainer}> {
       repos.item.map(item=>
        <div key={item.id} className={styles.card}>
            <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
         
          name:{item.name}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          visibility:   {item.visibility}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          created_at: {item.created_at}
          </Typography>
          <Typography variant="body2" component="p">
          description: {item.description}
          </Typography>
          <Typography variant="body2" component="p">
          Total forks: {item.forks}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          href={item.html_url}
          target="_blank"
          size="small">visit repo</Button>
        </CardActions>
      </Card>
            <div className={styles.ownerSide}>
                <div className={styles.dp}><img src={item.owner.avatar_url} alt="" /></div>
                <div>{item.owner.login}</div>
            </div>
        </div>
        


        )
        
          }
        
          
      </div>
      <PaginationComponent handlePagination={handlePagination}/>
  </LoadingScreen>

  );
}
