import React from 'react'

//Existem componente baseados em função e componente baseados em classes

//Criado um componente baseado em função

// function primeiro(){
//     return <h1>Primeiro Componente!</h1>
// }

// export default props => 
//     <h1>Primeiro Componente (Arrow)!</h1>

let isLegal = true

export default props => //Parâmetro de um compoente se chama props
    <div>
        <p>Acessando as propriedades através de parâmtros do componente</p>
        <h1>{props.nome}</h1> 
        <h2>{props.idade}</h2>
        <h3>Legal? {isLegal ? 'Sim' : 'Não'}</h3>
    </div> //Acessando uma propriedade

// export default primeiro //Exportando o componente