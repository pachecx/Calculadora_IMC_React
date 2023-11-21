import './ImcCalc.css'
import { Button } from './Button';

export function ImcCalc(){
    return(
        <div>
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
                    />
                </div>
                <div className="action-control">
                </div>
            </form>
        </div>
    );
}