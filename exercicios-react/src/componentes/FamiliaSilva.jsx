import React from 'react'
import Membro from './Membro'

export default props => //Internamente no java sript toda classe é uma função
    <div> 
        <Membro nome='Thaísa' sobrenome={props.sobrenome} />
        <Membro nome='Rhaira' sobrenome={props.sobrenome} />
        <Membro nome='Gabriela' sobrenome={props.sobrenome} />
    </div>

    //Comunicação direta do pai pros filhos