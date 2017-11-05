import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';

class ContactDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      cellPhone: '',
    };
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  onClearButtonClick = event => {
    const {
      email,
      cellPhone,
    } = this.findAll('Input');

    email.value = '';
    cellPhone.value = '';
  }

  findAll = tagName => ReactDOM.findDOMNode(this).getElementsByTagName(tagName);

  render() {
    return (
      <Panel column x="l" y="l" between="l" style={{ width: 350 }}>
        <h4 style={{ textAlign: 'center' }}>
          Informe os seus dados para contato
        </h4>
        <Panel column between="s">
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="cellPhone"
            placeholder="Celular"
            onChange={this.handleChange}
            required
          />
        </Panel>
        <Panel between="s">
          <Button fit onClick={() => this.props.onSaveProfile(this.state)}>
            Salvar
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

export default ContactDataForm;
