export const SORT_COLUMN = 'SORT_COLUMN';
export const SELECT_ROW = 'SELECT_ROW';
export const SELECT_ALL_ROWS = 'SELECT_ALL_ROWS';
export const CHANGE_NUMBER_OF_SELECTED_ROWS = 'CHANGE_NUMBER_OF_SELECTED_ROWS';
export const DELETE_SELECTED_ROWS = 'DELETE_SELECTED_ROWS';



export const changeSortColumn = data => (
    {
        type: SORT_COLUMN,
        payload: {
            data
        }
    }
);

export const selectAllRows = (data, isSelected) => (
    {
        type: SELECT_ALL_ROWS,
        payload: data.map(el => {
                el.selected = !isSelected;
                return el
            }),
        isAllRowsSelected: !isSelected
    }
)

export const selectRow = (data, id) => (
    {
        type: SELECT_ROW,
        payload: data.map(el => {
                if(id === el.id && el.id !== 1){el.selected = !el.selected} 
                return el
            })
    }
)

export const changeNumberOfSelectedRows = data => (
    {
        type: CHANGE_NUMBER_OF_SELECTED_ROWS,
        payload: data.reduce((ac,el)=> el.selected ? ac + 1 : ac, 0)
    }
);

export const deleteSelectedRows = data => (
    {
        type: DELETE_SELECTED_ROWS,
        payload: data.reduce((ac,el)=>
            el.selected ? ac : ac.concat([el])
        ,[])
    }
)