import React from 'react';

//Ou exportar assim componente mas assim você não consegue exportar algo anônimo

//Usando props

export const CompoA = (props) => 
    <h1>Primeiro Diz: {props.valor}</h1>

export const CompoB = (props) => 
    <h1>Segundo Diz: {props.valor}</h1> //Exportando com default

export default CompoA

// export {CompoA, CompoB} //Exportar os componentes criados dentro do JSX