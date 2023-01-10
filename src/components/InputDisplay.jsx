import React, { useState, useEffect } from "react";

import "../styles/display.css";

function InputDisplay(props) {
    let { activeNumber, operationSign, result } = props.calcData;
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (result) {
            setDisplay(result);
            return;
        }

        if (operationSign) {
            setDisplay(operationSign + " " + activeNumber);
        } else {
            setDisplay(activeNumber + " " + operationSign);
        }
    }, [activeNumber, operationSign, result])

    return (
        <div className="display-container">
            <input type="text" value={display} className="input-display" placeholder="Enter value" readOnly />
        </div>
    );
}

export default InputDisplay;