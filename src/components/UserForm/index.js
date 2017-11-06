import React from 'react';

import Panel from 'components/Panel';
import Input from 'components/Input';
import Button from 'components/Button';

const errorMessages = {
  '400': 'Apelido ou senha inválidos.',
  '404': 'Usuário não encontrado.',
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <Panel column x="l" y="l" between="l" style={{ width: 350 }}>
        <h4 style={{ textAlign: 'center' }}>
          Acesse sua conta ou cadastre-se
        </h4>
        {this.props.error && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            {errorMessages[this.props.error]}
          </p>
        )}
        <Panel column between="s">
          <Input
            type="text"
            name="nickname"
            placeholder="Apelido (mínimo 3 dígitos)"
            minlength="3"
            maxlength="30"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha (mínimo 8 dígitos)"
            minlength="8"
            maxlength="16"
            onChange={this.handleChange}
          />
        </Panel>
        <Panel between="s">
          <Button fit onClick={() => this.props.onLogin(this.state)}>
            Entrar
          </Button>
          <Button fit ghost onClick={() => this.props.onCreateAccount(this.state)}>
            Criar Conta
          </Button>
        </Panel>
      </Panel>
    );
  }
}

export default UserForm;
