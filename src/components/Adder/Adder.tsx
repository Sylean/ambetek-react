import React, { Component } from 'react';
import Row from './Row';
import Summary from './Summary';
import './Adder.scss';
import { verifyLabCode, returnLabObject } from  './Resources/Labs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

const IVFee = 5;

type LabObject = {
    id: string,
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
        this._deleteRow = this._deleteRow.bind(this);
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
        var tempLab = returnLabObject(this.state.inputValue) as LabObject;
        tempLab.id = uuidv4();
        return tempLab;
    }

    _deleteRow(id: string) {
        this.setState({
            labs: this.state.labs.filter((lab) => lab.id !== id),
        });
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
        const rowList = this.state.labs.map((lab, index) =>
        <CSSTransition
            key={lab.id}
            timeout={500}
            classNames="adder-row">
            <Row code={lab.code} name={lab.name} price={lab.price} onDelete={this._deleteRow.bind(this, lab.id)}/>
        </CSSTransition> 
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
                        <TransitionGroup
                            className="adder-rows">
                            {rowList}
                        </TransitionGroup>
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