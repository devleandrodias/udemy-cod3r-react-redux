import React from 'react'
import { filhosComProps } from './react-utils/ultils'
//Criando um clone de um objeto sem passar referência

export default props =>
    <div>
        <h3>Família</h3>
        {filhosComProps(props)}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {props.children}  */}
    </div>

    // ... Cria um objeto clonado (Operador de spretch)