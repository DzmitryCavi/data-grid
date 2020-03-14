import {combineReducers} from 'redux';
import {tableReducer} from './table/reducers'
import {toolsReducer} from './tools/reducers'

export default combineReducers({
    table: tableReducer,
})