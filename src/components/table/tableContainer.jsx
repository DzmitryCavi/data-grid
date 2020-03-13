import React from 'react';
import { connect } from 'react-redux';
import DataTable from './table';
import { selectRow } from '../../store/table/actions'
import { changeNumberOfSelectedRows } from '../../store/tools/actions'

function DataTableContainer(props){
    return (
        <DataTable data={props.data} selectRow={props.selectRow} sortings={props.sortings} changeNumberOfSelectedRows={props.changeNumberOfSelectedRows}/>
    )   
}

const mapStateToProps = state => {
    return {
        data: state.table.data,
        sortings: state.table.sortings
    };
  }

const mapDispatchToProps = {
    selectRow,
    changeNumberOfSelectedRows
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTableContainer)