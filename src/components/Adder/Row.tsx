import React from 'react';
import "./Row.scss";

type RowProps = {
    code: string,
    name: string,
    price: number,
}

function Row({ code, name, price}: RowProps) {
    return(
        <div className="adder-row">
            <div className="adder-row-code">{ code }</div>
            <div className="adder-row-name">{ name }</div>
            <div className="adder-row-price">{ price }</div>
            <div className="adder-row-delete"> d </div>
        </div>
        
        
    );
}

export default Row;