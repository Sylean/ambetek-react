import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import "./Row.scss";

type RowProps = {
    code: string,
    name: string,
    price: number,
    onDelete: () => void,
}

function Row({ code, name, price, onDelete}: RowProps) {
    return(
        <div className="adder-row">
            <div className="adder-row-code">{ code }</div>
            <div className="adder-row-name">{ name }</div>
            <div className="adder-row-price">{ price.toFixed(2) }</div>
            <div className="adder-row-delete">
                <button className="adder-row-delete-btn">
                    <DeleteIcon onClick={onDelete}/>
                </button>
            </div>
        </div>
        
        
    );
}

export default Row;