import {combineReducers} from 'redux';
import {tableReducer} from './table/reducers'

export default combineReducers({
    table: tableReducer,
})