import React from 'react';
//Componentes Adjacentes, Multipls elementos em um único componente

//Solução 03 - Utilizando estruturas de array
export default (props) => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

//Solução 02 - Fragments
// export default (props) =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

//Solução 01 - Mais usada!
// export default (props) =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>
