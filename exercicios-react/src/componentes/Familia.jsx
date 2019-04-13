import React from 'react';
import {filhosComProps as FP} from '../utlitarios/componentesUtilizatarios';

export default props => 
    <div>
        <h1>Família</h1>

        {FP(props)}

        {/* {React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, {...props})
        })} */}

        {/* {React.cloneElement(props.children, {...props})} Modifica o clone de todas as propriedade, ... Cria um objeto clonado */}

        {/* {React.cloneElement(props.children, props)} */} {/*Modifica todas as propriedade*/}

        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome})} */} {/*Modifica apenas uma propriedade*/}
        {/* {props.children} */}
    </div>  