// import React, { useEffect } from "react";
// import { useState } from "react";

// export const Calculation = (props) => {
//     const [hole_placement, setHole_placement] = useState([]);
//     const [amount_holes, setAmount_holes] = useState('');
//     const [border_1, setBorder_1] = useState('');
//     const [border_2, setBorder_2] = useState('');

//     useEffect(() => {

//         const amt_holes_calc = () => {
//             let total_holes = Math.floor(parseFloat(props.width) / parseFloat(props.spacing));
//             setAmount_holes(total_holes);
//         }

//         const borders = () => {

//             let b1 = ((parseFloat(props.width) - (parseFloat(props.spacing) * parseFloat(amount_holes) - 1))/2);
//             setBorder_1(b1);

//             let b2 = (parseFloat(props.width) - parseFloat(border_1) );
//             setBorder_2(b2);

//         }

//         let hole_placement = () => {

//             let hole_plac = [];

//             for (let i = 0; i < amount_holes; i++){

//                 let calc = border_1 + (parseFloat(props.spacing) * [i] );

//                 console.log(calc);

//                 hole_plac.push(calc);
//             }

//             setHole_placement(hole_plac + ',');
//         }


//         amt_holes_calc();
//         borders();
//         hole_placement();

//     }, [props.width,props.spacing])

//     return (
//         <div>
//             <h1>Calculation</h1>
//             <p>Width {props.width}</p>
//             <p>Spacing of {props.spacing}</p>
//             <p>Amount of holes: {amount_holes}</p>
//             <p>Border 1: {border_1}</p>
//             <p>Border 2: {border_2}</p>
//             <p>Hole placement: {hole_placement}</p>
            
//         </div>
//     )



// }

//Second attempt
import React, { useEffect, useState } from "react";
import "./calculation.css";

export const Calculation = (props) => {
    const [hole_placement, setHole_placement] = useState([]);
    const [amount_holes, setAmount_holes] = useState(0);
    const [border_1, setBorder_1] = useState(0);
    const [border_2, setBorder_2] = useState(0);

    useEffect(() => {
        const calculate = () => {
            let total_holes = Math.floor(parseFloat(props.width) / parseFloat(props.spacing));
            let b1 = (parseFloat(props.width) - (parseFloat(props.spacing) * (total_holes - 1))) / 2;
            let b2 = parseFloat(props.width) - b1;

            let hole_plac = [];
            for (let i = 0; i < total_holes; i++) {
                let calc = b1 + (parseFloat(props.spacing) * i);
                hole_plac.push(calc);
            }

            setAmount_holes(total_holes);
            setBorder_1(b1);
            setBorder_2(b2);
            setHole_placement(hole_plac);
        };

        calculate();
    }, [props.width, props.spacing]);

    const downloadResults = () => {
        const content = `
            Width: ${props.width}\n
            Spacing: ${props.spacing}\n
            Amount of holes: ${amount_holes}\n
            Border 1: ${border_1}\n
            Border 2: ${border_2}\n
            Hole placement: ${hole_placement.join(', ')}
        `;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'calculation_results.txt';
        link.click();
        URL.revokeObjectURL(url);
    };

    if (isNaN(parseFloat(props.width)) || isNaN(parseFloat(props.spacing)) || parseFloat(props.width) <= 0 || parseFloat(props.spacing) <= 0) {
        return null;
    }

    return (
        <div id="results">
                <h2>Results</h2>
                <p>Width: <span>{props.width}</span></p>
                <p>Spacing: <span>{props.spacing}</span></p>
                <p>Amount of holes: <span>{amount_holes}</span></p>
                <p>First Hole: <span>{border_1}</span></p>
                <p>Last Hole: <span>{border_2}</span></p>
                <p>Hole placement: <span>{hole_placement.join(', ')}</span></p>

                <div id="download">      
                    <button onClick={downloadResults}>Download Results</button>
                </div>
        </div>
    );
};
