
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationComponent({handlePagination}) {
  const classes = useStyles();
  
  const [page, setPage] = useState(1);
  const totalPage=useSelector((state)=>state.gitrepo);
  console.log(totalPage.totalpages)
  const handleChange = (event, value) => {
    handlePagination(page)
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPage.totalpages} page={page} onChange={handleChange} />
    </div>
  );
}
