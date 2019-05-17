import ReactDOM from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA as A, CompB as B} from './componentes/DoisComponenes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponetenComFuncao from './componentes/ComponentesComFuncao'
// import Pai from './componentes/Pai'
// import CompoenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

//Você está em um contexto de JavaScript
//O index é o ponto de entrada do build e tudo q for deve ser colocado aqui

const elemento = document.getElementById('root') //Na pasta public possui o arquivo index q tem uma div root em que lá é rendenizado os componenetes de react

ReactDOM.render(
    <div>
        {/* <PrimeiroComponente nome='Olá, Leandro' idade={Math.pow(2, 18)} /> */}
        {/* <A valor='Sou o A' /> */}
        {/* <B valor='Sou o B' /> */}
        {/* <MultiElementos /> */}
        {/* <FamiliaSilva sobrenome='Castro'/> */}
        {/* <Familia sobrenome='Castro'>
            <Membro nome='Beatriz' sobrenome='Castro' />
            <Membro nome='Leandro' sobrenome='Dias' />
        </Familia> */}
        {/* <ComponetenComFuncao /> */}
        {/* <Pai /> */}
        {/* <CompoenteClasse valor={'Valor Valor'} /> */}
        {/* <Contador numeroInicial={100}/> */}
        <Hook />
    </div>
    , elemento)

// const jsx = <h3>Olá, React!</h3>
// ReactDOM.render(jsx, elemento) //Isso não é HTML isso é JSX

//main.chuk.jsesse arquivo é fruto do build onde é transformado o JSX em JavaScrip puro e fica em memória