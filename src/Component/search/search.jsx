import styles from "./style.module.css"
import { useSelector } from "react-redux";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    const repos=useSelector((state)=>state.gitrepo);
    console.log(repos)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className={styles.cardContainer}> {
       repos.map(item=>
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
     
   
  );
}
