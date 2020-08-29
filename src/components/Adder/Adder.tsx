import React, { Component } from 'react';
import Row from './Row';
import './Adder.scss';
import { verifyLabCode, returnLabObject } from  './Resources/Labs';

type LabObject = {
    code: string,
    name: string,
    price: number,
}

type AdderState = {
    labs: Array<LabObject>;
}


class Adder extends Component<{}, AdderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            labs: [{
                code: "763X",
                name: "PTT (Activated)",
                price: 5.5,
            },
            {
                code: "123",
                name: "test",
                price: 10,
            }],
        }
    }



    render() {
        const rowList = this.state.labs.map((lab) =>
        <Row code={lab.code} name={lab.name} price={lab.price} />
    );

        return (
            <div className="adder-container">
                <div className="adder-grid">
                    <div className="adder-header">
                        <div className="adder-header-code"> Code </div>
                        <div className="adder-header-name"> Name </div>
                        <div className="adder-header-price"> Price </div>
                        <div className="adder-header-placeholder">  </div>
                    </div>
                    {rowList}
                    <div className="adder-add-row">
                        <div className="adder-add-code"> Code </div>
                        <div className="adder-add-name"> Name </div>
                        <div className="adder-add-price"> Price </div>
                        <div className="adder-add-placeholder">  </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adder;