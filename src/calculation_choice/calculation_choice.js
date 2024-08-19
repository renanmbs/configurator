import React, { useState } from "react";
import './calculation_choice.css';
// import { TiDelete } from "react-icons/ti";
import { Calculation } from "../calculation/calculation";



export const CalculationChoice = (props) => {
    let [Width, setWidth] = useState('');
    let [Spacing, setSpacing] = useState('');

    const handleWidth = ({target}) => {
        setWidth(target.value);
    }

    const handleSpacing = ({target}) => {
        setSpacing(target.value);
    }

    // const handleClickWidth = () =>{
    //     setWidth(0);
    // }

    // const handleClickSpacing = () =>{
    //     setSpacing(0);
    // }

    return (
        <div id="calc">

            <h2>Customizable Holes</h2>
            
            <div id="input">
                <label className="inputs1">Width
                    <input type="number"value={Width} onChange={handleWidth}/>
                    {/* <button onClick={handleClickWidth}>X</button> */}
                </label>
                <br/>
                
                <label className="inputs2">
                    Spacing
                    <input type="number" value={Spacing} onChange={handleSpacing}/>
                    {/* <button onClick={handleClickSpacing}>X</button> */}
                </label>

                <Calculation width={Width} spacing={Spacing}/>
            </div>
        </div>
    )
}
