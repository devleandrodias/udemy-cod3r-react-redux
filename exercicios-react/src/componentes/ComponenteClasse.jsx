import React, { Component } from 'react'

//Há uma hernança entre essa classe e um componente do react se usa o extends

export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1> {this.props.valor || 'Padrão'} </h1>
        )
    }
}

//this.props.valor, espero receber um valor via propriedade