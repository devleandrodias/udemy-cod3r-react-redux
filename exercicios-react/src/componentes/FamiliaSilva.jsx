import React from 'react';
import Membro from './Membro';

export default props =>
    <React.Fragment>
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Júlia" sobrenome={props.sobrenome} />
        <Membro nome="Amanda" sobrenome={props.sobrenome} />
        <Membro nome="Carolina" sobrenome={props.sobrenome} />
    </React.Fragment>

//Internamente JavaScrip uma classe vira uma função

//Um componente pai pode passar propriedade pro componente filho