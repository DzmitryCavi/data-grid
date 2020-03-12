import React from 'react';
import { connect } from 'react-redux';
import DataTable from './table';
import { selectRow } from '../../store/table/actions'

function DataTableContainer(props){
    return (
        <DataTable data={props.data} selectRow={props.selectRow} sortings={props.sortings}/>
    )   
}

const mapStateToProps = state => {
    console.log(state)
    return {
        data: state.table.data,
        sortings: state.table.sortings
    };
  }

// const mapDispatchToProps = () => {
//     selectRow
// }

export default connect(mapStateToProps)(DataTableContainer)