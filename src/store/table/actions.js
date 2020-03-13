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


export const selectRow = (data, id) => (
    {
        type: SELECT_ROW,
        payload: data.map(el => {
                if(id === el.id && el.id !== 1){el.selected = !el.selected} 
                return el
            })
    }
)