import React from 'react';
import { connect } from 'react-redux';
import Tools from './tools';

function ToolsContainer(props){
    return (
        <Tools />
    )   
}

const mapStateToProps = state => {
    return {
        
    };
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)