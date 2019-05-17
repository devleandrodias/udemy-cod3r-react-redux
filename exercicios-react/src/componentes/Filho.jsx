import React from 'react'

export default props =>
    <div>
        <button 
            onClick={() => props.notificarSaida('Shopping')}>
            Vou sair pai
        </button>
    </div>

//Comunicação indireta