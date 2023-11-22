import './App.css'
import { ImcCalc } from './components/ImcCalc';
import { useState } from 'react';
import { data } from './data/data';
import { ImcTable } from './components/ImcTable';

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!weight || !height) return;

    console.log(height, weight)
    console.log("Executou")
  };

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  return (
    
    <div className='container'>
      {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable />  }
    </div>
  );
}

export default App
