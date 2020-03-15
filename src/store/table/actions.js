
export const SELECT_ROW = 'SELECT_ROW';
export const SELECT_ALL_ROWS = 'SELECT_ALL_ROWS';
export const CHANGE_NUMBER_OF_SELECTED_ROWS = 'CHANGE_NUMBER_OF_SELECTED_ROWS';
export const DELETE_SELECTED_ROWS = 'DELETE_SELECTED_ROWS';
export const SORT_COLUMN = 'SORT_COLUMN';
export const FILTER_TEXT_OR_NUMBER = 'FILTER_TEXT_OR_NUMBER';

export const textFilter = (data, text) => (
    {
        type: FILTER_TEXT_OR_NUMBER,
        payload: data.filter(value => 
            Object.keys(value).reduce((ac,key) => 
              value[key].toString().toLowerCase().indexOf(text.toLowerCase()) !== -1 ? true : ac,
              false
            )
        )
    }
)

export const changeClolumnSort = (data, columnId, columnNames, isAscendingSort) => (
    {
        type: SORT_COLUMN,
        payload: data.sort((a,b) => isAscendingSort ? a.data[columnId] > b.data[columnId] : a.data[columnId] < b.data[columnId]),
        columnNames: columnNames.map((el, index) => index === columnId ? {...el , sorted: true, isAscendingSort: !el.isAscendingSort} : {...el, sorted: false, isAscendingSort: true})
    }
)

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