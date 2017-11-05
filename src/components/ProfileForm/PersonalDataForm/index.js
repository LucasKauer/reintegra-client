import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import Panel from 'components/Panel';
import Select from 'components/Select';
import Option from 'components/Select/Option';

class PersonalDataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cpf: '',
      birthday: new Date(),
      name: '',
      rg: '',
      gender: '',
      stateOfBirth: '',
      nationality: '',
      maritalStatus: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClearButtonClick = event => {
    const {
      cpf,
      birthday,
      name,
      rg,
      stateOfBirth,
      nationality,
    } = this.findAll('Input');

    cpf.value = '';
    birthday.value = '';
    name.value = '';
    rg.value = '';
    stateOfBirth.value = '';
    nationality.value = '';

    const {
      gender,
      maritalStatus,
    } = this.findAll('Select');
    gender.value = '';
    maritalStatus.value = '';

    this.setState({ gender: '', maritalStatus: '' });
  }

  findAll = tagName => ReactDOM.findDOMNode(this).getElementsByTagName(tagName);

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
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="cpf"
            placeholder="CPF"
            length="11"
            onChange={this.handleChange}
            required
          />
          <Input
            type="date"
            name="birthday"
            placeholder="Data de Nascimento"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="rg"
            placeholder="RG"
            length="10"
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
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="nationality"
            placeholder="Nacionalidade"
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
