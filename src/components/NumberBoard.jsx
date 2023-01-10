import React from "react";

import "../styles/numbers.css";

function NumberBoard(props) {
    const {sendInput} = props;
    const numbers = [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 0
    ];

    function handleClick(event) {
        let number = event.target.textContent;
        sendInput(number.toString());
    }

    return (
        <table>
            <tbody>
                {numbers.map((value, index) => {
                    if (value === 0) {
                        return (
                            <tr key={index}>
                                <td onClick={handleClick}>
                                    {value}
                                </td>
                            </tr>
                        );
                    } else if ((index % 3) === 0) {
                        return (
                            <tr key={index}>
                                <td onClick={handleClick}>
                                    {numbers[index]}
                                </td>
                                <td onClick={handleClick}>
                                    {numbers[index + 1]}
                                </td>
                                <td onClick={handleClick}>
                                    {numbers[index + 2]}
                                </td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        </table>
    );
}

export default NumberBoard;