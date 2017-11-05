import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';

import getCepInfo from 'utils/cep';

class ResidentialDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: '',
      state: '',
      city: '',
      neighborhood: '',
      address: '',
      complement: '',
      number: 0,
    };
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleBlur = ({ target }) => {
    getCepInfo(target.value)
      .then(cepInfo => {
        const { state, city, neighborhood, address } = this.findAll('Input');

        state.value = cepInfo.state;
        city.value = cepInfo.city;
        neighborhood.value = cepInfo.neighborhood;
        address.value = cepInfo.address
      })
      .catch(console.log);
  };

  onClearButtonClick = event => {
    const {
      cep,
      state,
      city,
      neighborhood,
      address,
      complement,
      number
    } = this.findAll('Input');

    cep.value = '';
    state.value = '';
    city.value = '';
    neighborhood.value = '';
    address.value = '';
    complement.value = '';
    number.value = '';
  }

  findAll = tagName => ReactDOM.findDOMNode(this).getElementsByTagName(tagName);

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
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required
          />
          <Input
            type="text"
            name="state"
            placeholder="Estado"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="city"
            placeholder="Cidade"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Logradouro"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="complement"
            placeholder="Complemento"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="number"
            placeholder="Número"
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
  };
};

export default ResidentialDataForm;
