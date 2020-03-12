import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
  
export default function DataTable(props) {
    const classes = useStyles();
    const { data } = props;
    const dataHead = data.shift().data;
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                { 
                    dataHead.map(cell => (<TableCell key={cell}  align="right">{cell}</TableCell>))
                }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                {
                  row.data.map((cell , index) =>  (<TableCell key={cell} align="right">{cell}</TableCell>))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    );
  }
