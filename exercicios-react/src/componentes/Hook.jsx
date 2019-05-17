import React, { useState, useEffect } from 'react'

export default props => {
    
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Ímpar')
    })

    return (
        <div>
            <h3>{contador}</h3>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    )
}

//Dentro de um componente funcional você pode alterar o estado do componente usando os hooks