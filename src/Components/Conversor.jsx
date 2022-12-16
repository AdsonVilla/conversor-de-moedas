import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor_moedaA: "",
      valor_moedaB: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=f87ddfe468f2be608e82`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[de_para];
        let valor_moedaB = (
          parseFloat(this.state.valor_moedaA) * cotacao
        ).toFixed(2);
        this.setState({ valor_moedaB });
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(ev) => {
            this.setState({ valor_moedaA: ev.target.value });
          }}
        ></input>
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h2>{this.state.valor_moedaB}</h2>
      </div>
    );
  }
}
