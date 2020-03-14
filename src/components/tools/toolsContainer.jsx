import React from 'react';
import { connect } from 'react-redux';
import Tools from './tools';
import {deleteSelectedRows} from '../../store/tools/actions'

function ToolsContainer(props){
    return (
        <Tools rowsCounter={props.rowsCounter} data={props.data} deleteSelectedRows={props.deleteSelectedRows}/>
    )   
}

const mapStateToProps = state => {
    return {
        rowsCounter: state.tools.rowsCounter,
        data: state.table.data
    };
}
const mapDispatchToProps = {
    deleteSelectedRows
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)