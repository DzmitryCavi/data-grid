import { CHANGE_NUMBER_OF_SELECTED_ROWS } from "./actions";

const defaultState = {
    rowsCounter: 0
};

export const toolsReducer = (state = defaultState, action) => {
    switch (action.type) 
    {
        case CHANGE_NUMBER_OF_SELECTED_ROWS:
            return {
                ...state,
                rowsCounter: action.payload
            }
    }
    return state;
}