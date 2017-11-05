import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';
import Select from 'components/Select';
import Option from 'components/Select/Option';

class PersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.initalState = {
      cpf: '',
      birthday: new Date(),
      name: '',
      rg: '',
      gender: '',
      stateOfBirth: '',
      nationality: '',
      maritalStatus: '',
    };

    this.state = this.initalState;
  };

  componentWillMount() {
    this.setState(this.props.userProfile);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClearButtonClick = event => this.setState(this.initalState);

  render() {
    return (
      <Panel column x="l" y="l" between="l" style={{ width: 350 }}>
        <h4 style={{ textAlign: 'center' }}>
          Informe os seus dados pessoais
        </h4>
        <Panel column between="s">
          <Input
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="cpf"
            placeholder="CPF"
            length="11"
            value={this.state.cpf}
            onChange={this.handleChange}
            required
          />
          <Input
            type="date"
            name="birthday"
            placeholder="Data de Nascimento"
            value={this.state.birthday}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="rg"
            placeholder="RG"
            length="10"
            value={this.state.rg}
            onChange={this.handleChange}
            required
          />
          <Select
            name="gender"
            placeholder="Gênero"
            onChange={this.handleChange}
            value={this.state.gender}
            required
          >
            <Option value='M' text='Masculino' />
            <Option value='F' text='Feminino' />
            <Option value='O' text='Outro' />
          </Select>
          <Input
            type="text"
            name="stateOfBirth"
            placeholder="Naturalidade"
            value={this.state.stateOfBirth}
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="nationality"
            placeholder="Nacionalidade"
            value={this.state.nationality}
            onChange={this.handleChange}
            required
          />
          <Select
            name="maritalStatus"
            placeholder="Estado Civil"
            onChange={this.handleChange}
            value={this.state.maritalStatus}
            required
          >
            <Option value='MARRIED' text='Casado(a)' />
            <Option value='DIVORCED' text='Divorciado(a)' />
            <Option value='SEPARETED' text='Separado(a)' />
            <Option value='SINGLE' text='Solteiro(a)' />
            <Option value='WIDOWED' text='Viúvo(a)' />
          </Select>
        </Panel>
        <Panel between="s">
          <Button fit onClick={() => this.props.onNextStep(this.state)}>
            Próximo passo
          </Button>
          <Button fit ghost onClick={this.onClearButtonClick}>
            Limpar
          </Button>
        </Panel>
      </Panel>
    );
  };
};

export default PersonalDataForm;
