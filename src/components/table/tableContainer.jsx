import React from 'react';
import { connect } from 'react-redux';
import DataTable from './table';
import { selectRow, deleteSelectedRows, selectAllRows, changeClolumnSort, changeVirtualizationStatus } from '../../store/table/actions'

function DataTableContainer(props){
    return (
        <DataTable filtredData={props.filtredData}
                   selectRow={props.selectRow} 
                   sortings={props.sortings} 
                   selectedRowsCounter={props.selectedRowsCounter}
                   deleteSelectedRows={props.deleteSelectedRows}
                   selectAllRows={props.selectAllRows}
                   isAllRowsSelected={props.isAllRowsSelected}
                   changeClolumnSort={props.changeClolumnSort}
                   columnNames={props.columnNames}
                   allData={props.allData}
                   isVirtual={props.isVirtual}
                   changeVirtualizationStatus={props.changeVirtualizationStatus}
                   />
    )   
}

const mapStateToProps = state => {
    return {
        filtredData: state.table.filtredData,
        allData: state.table.data,
        sortings: state.table.sortings,
        selectedRowsCounter: state.table.selectedRowsCounter,
        isAllRowsSelected: state.table.isAllRowsSelected,
        columnNames: state.table.columnNames,
        isVirtual: state.table.isVirtual
    };
  }

const mapDispatchToProps = {
    selectAllRows,
    selectRow,
    deleteSelectedRows,
    changeClolumnSort,
    changeVirtualizationStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTableContainer)