import { SORT_COLUMN, SELECT_ROW } from "./actions";
import TableData from '../../data/planets';

const defaultData = TableData.data.reduce((ac,el) =>
    ac.concat([{id: el.shift(), selected: false, data: el}]),
    []
);

const defaultState = {
    data: defaultData,
    sortings: []
};

export const tableReducer = (state = defaultState, action) => {
    switch (action.type) 
    {
        case SORT_COLUMN:
            return {
                ...state,
                data: action.payload
            }
        case SELECT_ROW:
            return {
                ...state,
                data: action.payload
            }
        
    }
    return state;
}