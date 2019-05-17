import React from 'react'

//Exportando multiplos elementos adjacentes

// Solução 03 - Exportando em forma de array
// export default props => [
//     <h1>Parte 1</h1>,
//     <h1>Parte 2</h1>
// ]

// Solução 02 - Mais correta
export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h1>Parte 2</h1>
    </React.Fragment>

// Soluão 01 - Mais usada   
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </div>