import './ImcCalc.css'
import { Button } from './Button';
import { useState } from 'react';

export function ImcCalc({ calcImc }){
    const [height, SetHeight] = useState("");
    const [weight, SetWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        SetHeight("");
        SetWeight("");
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    };

    const handleHeightChange = (e)=>{
        const updatedValue = validDigits(e.target.value)
        SetHeight(updatedValue)
    };

    const handleWeightChange = (e)=>{
        const updatedValue = validDigits(e.target.value)
        SetWeight(updatedValue)
    };

    return(
        <div>
            <div id="calc-container">
                <h2>Calculadora IMC</h2>
                <form id='imc-form'>
                    <div className="form-inputs">
                        <div className="form-control">
                            <label htmlFor='height'>Altura:</label>
                            <input 
                                type='text'
                                name='height'
                                id='height'
                                placeholder='Exemplo 1,75'
                                onChange={(e) =>  handleHeightChange(e)}
                                value={height}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label htmlFor='weight'>Peso:</label>
                        <input 
                            type='text'
                            name='weight'
                            id='weight'
                            placeholder='Exemplo 78'
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                    <div className="action-control">
                        <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                        <Button id="clear-btn" text="limpar" action={clearForm}/>
                    </div>
                </form>
            </div>
        </div>
    );
}