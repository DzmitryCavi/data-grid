import React from 'react';
import { connect } from 'react-redux';
import Tools from './tools';
import { textFilter, multiSelectFilter } from '../../store/table/actions'


function ToolsContainer(props){
    return (
        <Tools textFilter={props.textFilter} data={props.data} filtredData={props.filtredData} multiSelectFilter={props.multiSelectFilter}/>
    )   
}

const mapStateToProps = state => {
    return {
        data: state.table.data,
        filtredData: state.table.filtredData
    };
}
const mapDispatchToProps = {
    textFilter,
    multiSelectFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)