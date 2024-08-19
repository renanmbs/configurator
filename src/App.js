import './App.css';
import { CalculationChoice } from './calculation_choice/calculation_choice';

function App() {

  return (
    <div className="back">

      <div id='top'>
        <h1>Z-Clip Size Configurator</h1>
        <h3>For Model <i>MF625</i></h3>
        <img src='/img/monarch-metal-fabrication-vector-logo.png' alt='Monarch Metal Logo'/>
       
       
       </div>

      <CalculationChoice/>

    </div>
  );
}

export default App;
