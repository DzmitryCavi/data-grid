import { SORT_COLUMN, SELECT_ROW, CHANGE_NUMBER_OF_SELECTED_ROWS, DELETE_SELECTED_ROWS, SELECT_ALL_ROWS } from "./actions";
import TableData from '../../data/planets';

const defaultData = TableData.data.reduce((ac,el) =>
    ac.concat([{id: el.shift(), selected: false, data: el}]),
    []
);

const defaultState = {
    data: defaultData,
    rowsCounter: 0,
    sortings: [],
    isAllRowsSelected: false
};

export const tableReducer = (state = defaultState, action) => {
    switch (action.type) 
    {
        case SORT_COLUMN:
            return {
                ...state,
                data: action.payload
            }
        case SELECT_ALL_ROWS:
            return {
                ...state,
                data: action.payload,
                isAllRowsSelected: action.isAllRowsSelected
            }   
        case SELECT_ROW:
            return {
                ...state,
                data: action.payload
            }
        case CHANGE_NUMBER_OF_SELECTED_ROWS:
            return {
                ...state,
                rowsCounter: action.payload
            }
        case DELETE_SELECTED_ROWS: 
            return {
                ...state,
                data: action.payload
            }
        
    }
    return state;
}
