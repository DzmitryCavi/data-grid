import React from 'react';
import { connect } from 'react-redux';
import Tools from './tools';
import { textFilter } from '../../store/table/actions'


function ToolsContainer(props){
    return (
        <Tools textFilter={props.textFilter} data={props.data}/>
    )   
}

const mapStateToProps = state => {
    return {
        data: state.table.data
    };
}
const mapDispatchToProps = {
    textFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)