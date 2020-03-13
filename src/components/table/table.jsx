import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableData from '../../data/planets';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  activeRow: {
    background: 'red',
    cursor: 'pointer'
  },
  unactiveRow: {
    background: 'white',
    cursor: 'pointer'
  }
});
  
export default function DataTable(props) {
    const classes = useStyles();
    const { data } = props;

    const tableHeadData = TableData.head;
    
    const rowClickHandler = (id) => {
      props.selectRow(data, id);
      props.changeNumberOfSelectedRows(data);
    }

    const Row = () =>(
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id} className={row.selected ? classes.activeRow : classes.unactiveRow} onClick={() => {rowClickHandler(row.id)}}>
            {
              row.data.map((cell, index) =>  (<TableCell key={row.id + index} align="right">{cell}</TableCell>))
            }
          </TableRow>
        ))}
      </TableBody>
    ) 

    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                { 
                  tableHeadData.map(cell => (<TableCell key={cell}  align="right">{cell}</TableCell>))
                }
            </TableRow>
          </TableHead>
              <Row />       
        </Table>
      </TableContainer>
      </Paper>
    );
  }
