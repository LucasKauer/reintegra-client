import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';

class ContactDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      email: '',
      cellPhone: '',
    };

    this.state = this.initialState;
  }

  componentWillMount() {
    this.setState(this.props.userProfile);
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  onClearButtonClick = event => this.setState(this.initialState);

  findAll = tagName => ReactDOM.findDOMNode(this).getElementsByTagName(tagName);

  render() {
    return (
      <Panel column x="l" y="l" between="l" style={{ width: 350 }}>
        <h4 style={{ textAlign: 'center' }}>
          Informe os seus dados para contato
        </h4>
        <Panel column between="s">
          <Input
            type="email"
            name="email"
            placeholder="E-mail (exemplo@reintegra.com.br)"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="cellPhone"
            placeholder="Celular"
            value={this.state.cellPhone}
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
