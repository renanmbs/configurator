import React, { useState } from "react";
import './calculation.css';
import { TiDelete } from "react-icons/ti";



export const Calculation = (props) => {
    let [Width, setWidth] = useState('');
    let [Spacing, setSpacing] = useState('');

    const handleWidth = ({target}) => {
        setWidth(target.value);
    }

    const handleSpacing = ({target}) => {
        setSpacing(target.value);
    }

    const handleClickWidth = () =>{
        setWidth('0');
    }

    const handleClickSpacing = () =>{
        setSpacing('0');
    }

    return (
        <div id="calc">

            <h2>{props.choice === 'with_holes' ? 
                'Calculation With Customizable Holes' : 'Calculation Without Holes'}
            </h2>
            
            <div id="input">
                <label className="inputs1">Width
                    <input type="number"value={Width} onChange={handleWidth} placeholder={Spacing}/>
                    <button onClick={handleClickWidth}><TiDelete /></button>
                </label>
                <br/>
                
                {props.choice === 'with_holes' ? 
                    <label className="inputs2">
                        Spacing
                        <input type="number" value={Spacing} onChange={handleSpacing} placeholder={Width}/>
                        <button onClick={handleClickSpacing}><TiDelete /></button>
                    </label>
                        : ''}
            </div>
        </div>
    )
}