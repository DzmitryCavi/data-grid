export const SORT_COLUMN = 'SORT_COLUMN';
export const SELECT_ROW = 'SELECT_ROW';

export const changeSortColumn = data => (
    {
        type: SORT_COLUMN,
        payload: {
            data
        }
    }
);


export const selectRow = index => (
    {
        type: SELECT_ROW,
        payload: {
            index
        }
    }
)