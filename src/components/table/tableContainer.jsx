import React from 'react';
import { connect } from 'react-redux';
import DataTable from './table';
import { selectRow, changeNumberOfSelectedRows, deleteSelectedRows, selectAllRows, changeClolumnSort } from '../../store/table/actions'

function DataTableContainer(props){
    return (
        <DataTable data={props.data} 
                   selectRow={props.selectRow} 
                   sortings={props.sortings} 
                   changeNumberOfSelectedRows={props.changeNumberOfSelectedRows}
                   rowsCounter={props.rowsCounter}
                   deleteSelectedRows={props.deleteSelectedRows}
                   selectAllRows={props.selectAllRows}
                   isAllRowsSelected={props.isAllRowsSelected}
                   changeClolumnSort={props.changeClolumnSort}
                   columnNames={props.columnNames}
                   />
    )   
}

const mapStateToProps = state => {
    return {
        data: state.table.filtredData,
        sortings: state.table.sortings,
        rowsCounter: state.table.rowsCounter,
        isAllRowsSelected: state.table.isAllRowsSelected,
        columnNames: state.table.columnNames
    };
  }

const mapDispatchToProps = {
    selectAllRows,
    selectRow,
    changeNumberOfSelectedRows,
    deleteSelectedRows,
    changeClolumnSort
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTableContainer)