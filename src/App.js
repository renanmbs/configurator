import './App.css';
import { useState } from 'react';
import { Calculation } from './calculation/calculation';

function App() {
  let [choice, setChoice] = useState('');

  let handleChange = ({target}) => {
    setChoice(target.value);
  }

  return (
    <div className="back">

      <div id='top'>
        <h1>Z-Clip Size Configurator</h1>
        <h3>For Model <i>MF625</i></h3>
        <img src='/img/monarch-metal-fabrication-vector-logo.png' alt='Monarch Metal Logo'/>
       

        <div id='options'>
          <select onChange={handleChange} defaultValue={''}>
            <option disabled value={''}>Choice of Custom Width</option>
            <option value={'with_holes'}>With Holes</option>
            <option value={'without_holes'}>Without Holes</option>
          </select>
        </div>
      </div>
       
      <Calculation choice={choice} />
    </div>
  );
}

export default App;
