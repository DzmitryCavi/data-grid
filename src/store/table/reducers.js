import { SORT_COLUMN, SELECT_ROW, DELETE_SELECTED_ROWS, SELECT_ALL_ROWS, FILTER_TEXT_OR_NUMBER, FILTER_BY_MULTI_SELECT } from "./actions";
import TableData from '../../data/planets';

const defaultData = TableData.data.reduce((ac, el) =>
    ac.concat([{id: el.shift(), selected: false, data: el}]),
    []
);

const defaultDataHead = TableData.head.reduce((ac, el) => 
    ac.concat([{name: el, sorted: false, isAscendingSort: true}]),
    []
);

const defaultState = {
    data: defaultData,
    filtredData: defaultData,
    columnNames: defaultDataHead,
    selectedRowsCounter: 0,
    sortings: [],
    isAllRowsSelected: false
};

export const tableReducer = (state = defaultState, action) => {
    switch (action.type) 
    {
        case FILTER_TEXT_OR_NUMBER: 
            return {
                ...state,
                filtredData: action.payload
            }
        case SORT_COLUMN:
            return {
                ...state,
                data: action.payload,
                columnNames: action.columnNames
            }
        case SELECT_ALL_ROWS:
            return {
                ...state,
                data: action.allData,
                filtredData: action.filtredData,
                isAllRowsSelected: action.isAllRowsSelected,
                selectedRowsCounter: action.selectedRowsCounter
            }   
        case SELECT_ROW:
            return {
                ...state,
                data: action.payload,
                selectedRowsCounter: action.selectedRowsCounter
            }
        case DELETE_SELECTED_ROWS: 
            return {
                ...state,
                data: action.allData,
                filtredData: action.filtredData,
                selectedRowsCounter: action.selectedRowsCounter
            }   
        case FILTER_BY_MULTI_SELECT: 
            return {
                ...state,
                filtredData: action.payload
            }
    }
    return state;
}
