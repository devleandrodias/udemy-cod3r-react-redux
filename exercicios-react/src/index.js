import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import CompoA, {CompoB as B} from './componentes/SegundoComponente'; //Operador de desestruturação e exportação de forma padrão (Default)
// import M from './componentes/MultiElementos';
// import FS from './componentes/FamiliaSilva'; //Por tebela usa componente Membro
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
import ComponenteComFuncao from './componentes/ComponenteComFuncao';

const elemento = document.getElementById('root'); //Root fica na index e é onde redenzia os componentes

//Isso é um trecho JSX e não html

ReactDOM.render(
    <div>
        {/* <PrimeiroComponente valor="Bom Dia!" teste="Outro valor!" mat={Math.pow(2, 8)}/> */}
        {/* <CompoA valor="Olá, eu sou A!" />  */}
        {/* <B valor="Olá, eu sou B!" /> */}
        {/* <M /> */}
        {/* <FS sobrenome="Castro"/> */}
        {/* <Familia sobrenome="Castro" numero={123}>
            <Membro nome="Thaísa"/>
            <Membro nome="Beatriz"/>
            {/* <Membro nome="Amanda" sobrenome="Silva"/> */}
            {/* <Membro nome="Leandro" sobrenome="Dias"/> */}
        {/* </Familia> */}

        <ComponenteComFuncao />

    </div>, elemento
); 

// ReactDOM.render(JSX, elemento); 
// const JSX = <h2>Olá React Teste</h2>;                  

//Pesquisar mais sobre JSX - JSX não é HTML dentro do javascript

//main.chunk esse arquivo não exite ele está me memória, responsavel com compilar aquivo js
// assim que tiver modificações gerando uma versão mais nova e tranforma o JSX em javascript puro
// e fica em memória até que seja gerado o build de produção, no arquivo final não tem JSX

//Hoje nossa organização deve ser feita separando aplicação em forma de componentes e não mais separando por tecnologia
//HTML, CSS, JavaScrip tudo está interligado e separamos agora através de uma estrutura componentizada

//React é muito focado na view e em componentes