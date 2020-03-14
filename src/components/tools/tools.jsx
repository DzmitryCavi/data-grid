import React from 'react';

export default function Tools(props){
    const clickHandler = ()=>{
        console.log(props.data);
        props.deleteSelectedRows(props.data);
    }
return (
    <div>
        <p>
        counter: {props.rowsCounter}
        </p>
        <button onClick={clickHandler}>DELETE</button>
    </div>
    )
}