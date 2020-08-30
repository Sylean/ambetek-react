import React, { Component } from 'react';
import Row from './Row';
import Summary from './Summary';
import './Adder.scss';
import { verifyLabCode, returnLabObject } from  './Resources/Labs';

const IVFee = 5;

type LabObject = {
    code: string,
    name: string,
    price: number,
}

type AdderState = {
    labs: Array<LabObject>;
    rowValid: boolean;
    inputValue: string;
}


class Adder extends Component<{}, AdderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            labs: [],
            rowValid: true,
            inputValue: "",
        };

        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._computeRowTotal = this._computeRowTotal.bind(this);
    }

    _handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this._addRow();
        }
    }

    _addRow() {
        if (this._validateRow()) {
            this.setState({
                labs: [...this.state.labs, this._buildRow()],
            })
        }
    }

    _buildRow() {
        return returnLabObject(this.state.inputValue) as LabObject;
    }

    _handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ inputValue: e.target.value })
    }

    _validateRow(): boolean {
        return verifyLabCode(this.state.inputValue);
    }

    _computeRowSubtotal(rows: Array<LabObject> ): number {
        return rows.reduce((acc: number, curr) => acc + curr.price, 0);
    }

    _computeRowTotal(rows: Array<LabObject> ): number {
        return this._computeRowSubtotal(rows) + 5;
    }

    render() {
        const rowList = this.state.labs.map((lab) =>
        <Row code={lab.code} name={lab.name} price={lab.price} />
    );

        return (
            <div className="adder-min-margin">
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
                            <div className={`adder-add-code ${this.state.rowValid ? "" : "invalid-input"}`}>
                                <input 
                                    aria-label="ID Code" 
                                    aria-required={true} 
                                    type="text"
                                    autoComplete="on"
                                    autoFocus={true}
                                    required={true}
                                    pattern={"[a-zA-Z0-9]+"}
                                    placeholder="ID Code"
                                    value={this.state.inputValue}
                                    onChange={this._handleChange}
                                    onKeyDown={this._handleKeyDown}
                                    />
                            </div>
                            <div className="adder-add-name"></div>
                            <div className="adder-add-price"></div>
                            <div className="adder-add-add"></div>
                        </div>
                    </div>
                    <Summary subtotal={this._computeRowSubtotal(this.state.labs)} IVFee={IVFee} total={this._computeRowTotal(this.state.labs)} />
                </div>
            </div>
        );
    }
}

export default Adder;