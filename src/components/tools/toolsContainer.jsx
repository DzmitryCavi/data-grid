import React from 'react';
import { connect } from 'react-redux';
import Tools from './tools';

function ToolsContainer(props){
    return (
        <Tools rowsCounter={props.rowsCounter} />
    )   
}

const mapStateToProps = state => {
    return {
        rowsCounter: state.tools.rowsCounter
    };
  }

export default connect(mapStateToProps)(ToolsContainer)