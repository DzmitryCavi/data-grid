export const CHANGE_NUMBER_OF_SELECTED_ROWS = 'CHANGE_NUMBER_OF_SELECTED_ROWS';
export const DELETE_SELECTED_ROWS = 'DELETE_SELECTED_ROWS';

export const changeNumberOfSelectedRows = data => (
    {
        type: CHANGE_NUMBER_OF_SELECTED_ROWS,
        payload: data.reduce((ac,el)=> el.selected ? ac + 1 : ac, 0)
    }
);

export const deleteSelectedRows = data => (
    {
        type: DELETE_SELECTED_ROWS,
        payload: data
    }
)