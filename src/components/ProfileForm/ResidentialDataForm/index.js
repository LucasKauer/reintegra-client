import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';

import getCepInfo from 'utils/cep';

class ResidentialDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      cep: '',
      state: '',
      city: '',
      neighborhood: '',
      address: '',
      complement: '',
      number: '',
    };

    this.state = this.initialState;
  }

  componentWillMount() {
    this.setState(this.props.userProfile);
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleBlur = ({ target }) => {
    getCepInfo(target.value)
      .then(cepInfo => this.setState(cepInfo))
      .catch(console.log);
  };

  onClearButtonClick = event => this.setState(this.initialState);

  render() {
    return (
      <Panel column x="l" y="l" between="l" style={{ width: 350 }}>
        <h4 style={{ textAlign: 'center' }}>
          Informe os seus dados residênciais
        </h4>
        <Panel column between="s">
          <Input
            type="text"
            name="cep"
            placeholder="CEP"
            length="8"
            value={this.state.cep}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required
          />
          <Input
            type="text"
            name="state"
            placeholder="Estado"
            value={this.state.state}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="city"
            placeholder="Cidade"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            value={this.state.neighborhood}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Logradouro"
            value={this.state.address}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="complement"
            placeholder="Complemento"
            value={this.state.complement}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="number"
            placeholder="Número"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Panel>
        <Panel between="s">
          <Button fit onClick={() => this.props.onNextStep(this.state)}>
            Próximo passo
          </Button>
          <Panel row between="s">
            <Button fit ghost onClick={() => this.props.onPrevStep(this.state)}>
              Voltar
            </Button>
            <Button fit ghost onClick={this.onClearButtonClick}>
              Limpar
            </Button>
          </Panel>
        </Panel>
      </Panel>
    );
  }
}

export default ResidentialDataForm;
