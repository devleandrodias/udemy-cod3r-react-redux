import React, { Component } from 'react'

export default class Contador extends Component {
    //Alterar algo que recebi via propriedade
    
    //Usando STATE

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    menosUm = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
            </div>
        )
    }

    //Solução 01
    // constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    //Desse jeito this sempre vai apotar para uma instância de Contador

    //Solução 02
    // <button onClick={() => this.maisUm()}>Incrementar</button>

    //Solução 03
    //Função anônima arrow, o this aponta para a classe onde a função foi escrita a função
    //  maisUm = () => {
    //     this.props.numero++
    // }
    
    //O super e necessário para passar as propriedades para classe pai Components
    //O this pode variar de acordo com quem chama a função
    //Passando a referência para função e não o chamada da função
}