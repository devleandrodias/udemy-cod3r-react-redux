//Existem dois tipos de componentes os baseados em funções e componentes baseados em classes
import React from 'react';

let isLegal = false;

//Isso é uma arrow function
export default (props) =>
<div> 
    <h1>{props.valor}</h1>
    <h1>{props.teste}</h1>
    <h1>{props.mat}</h1>
    <p>É VERDADEIRO? {isLegal ? 'SIM' : 'NÃO'}</p>
    <h2>{Math.random()}</h2>
</div>;


// export default (props) => <h1>Primeiro Componente! (Arrow)</h1>;

// export default function () { //Isso é uma função anônima
//     return <h1>Primeiro Componente!</h1>;
// };

// function primeiro(){
//     return <h1>Primeiro Componente!</h1>;
// };

// export default primeiro;