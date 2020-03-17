import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { FixedSizeList as List } from 'react-window';

const useStyles = makeStyles({
  root: {
    width: '60%',
    margin: 'auto'
  },
  container: {
    maxHeight: 500,
  },
  head: {
    margin: '15px 0',
    borderBottom: '3px solid #137cbd',
    width: 'auto'
  },
  body: {
    margin: '15px 0',
  },
  bodyCell:{
    borderTop: '1px solid #137cbd'
  }
});
  
export default function DataTable(props) {
    const classes = useStyles();
    const { filtredData, allData, isAllRowsSelected } = props;
    
    const rowClickHandler = id => {
      props.selectRow(filtredData, id);
    }

    const deleteRows = () => {
      props.deleteSelectedRows(filtredData, allData);
    }

    const selectAllRows = () => {
      props.selectAllRows(filtredData, allData, isAllRowsSelected);
    }

    const HeadRow = () => (
      <Grid container justify="center" spacing={1} className={classes.head}>
        <Grid item xs={1} align="center" >
          <Checkbox
            value="secondary"
            color="primary"
            checked={isAllRowsSelected}
            onChange={selectAllRows}
          />
          <IconButton aria-label="delete" className={classes.margin} size="small" onClick={deleteRows}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          {props.selectedRowsCounter}
        </Grid>
          { 
            props.columnNames.map((cell, index) => 
              (<Grid item xs={1} key={cell.name} align="center" onClick = {()=>{props.changeClolumnSort(filtredData, index, props.columnNames, cell.isAscendingSort)}}>
                  {cell.sorted ? cell.isAscendingSort ? <ArrowDownwardIcon fontSize="inherit"/> : <ArrowUpwardIcon fontSize="inherit"/> : <ArrowForwardIcon fontSize="inherit"/>}
                  {cell.name}
              </Grid>)
            )
          }
      </Grid>
    )
    
    const Row = ({index, style}) => {
      let row = filtredData[index];
      return (
        <Grid container justify="center" alignItems="center" className={classes.bodyCell} key={row.id} style={style} spacing={1}>
          <Grid item xs={1} align="center">
              <Checkbox checked={row.selected}
                value="secondary"
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={() => {rowClickHandler(row.id)}}
              />
          </Grid>
          {
            row.data.map((cell, index) =>  
            (<Grid item xs={1} key={row.id + index} align="center">
                {cell}
              </Grid>))
          }
        </Grid>
    )}
    
    const Rows = () => (
      <List 
        className={classes.body}
        height={500}
        itemCount={filtredData.length}
        itemSize={70}
        width={'100%'}
      >
        {Row}
      </List>
    )

    return (
      <Paper className={classes.root}>
        <HeadRow />      
        <Rows />
      </Paper>  
    );
  }
