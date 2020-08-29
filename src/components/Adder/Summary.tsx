import React from 'react';
import './Summary.scss';

type SummaryProps = {
    subtotal: number,
    IVFee: number,
    total: number,
}

function Summary({subtotal, IVFee, total}: SummaryProps) {
    return (
        <div className="adder-summary">
            <div className="adder-summary-container">
                <div className="adder-summary-row">
                    <div className="adder-summary-first">
                        Subtotal
                    </div>
                    <div className="adder-summary-second">
                        {subtotal.toFixed(2)}
                    </div>
                    <div>

                    </div>
                </div>
                <div className="adder-summary-row">
                    <div className="adder-summary-first">
                        IV Fee
                    </div>
                    <div className="adder-summary-second">
                        {IVFee.toFixed(2)}
                    </div>
                    <div>

                    </div>
                </div>
                <div className="adder-summary-row">
                    <div className="adder-summary-first">
                        Total
                    </div>
                    <div className="adder-summary-second">
                        {total.toFixed(2)}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default Summary;