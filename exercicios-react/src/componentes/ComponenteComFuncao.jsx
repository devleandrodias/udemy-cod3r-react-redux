import React from 'react';

const aprovados = ['Paula', 'Maria', 'Júlia', 'Thaísa'];

//Estudar mais para que serve o MAP

//Componente funciona chamando (Estudar mais)
export default props => {
    const gerarItens = itens => {
        return itens.map(itens => <li>{itens}</li>)
    }

    return (
        <ul>{gerarItens(aprovados)}</ul>
    )
};