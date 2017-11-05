import React from 'react';

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

  render() {
    return (undefined);
  };
};

export default PersonalDataForm;
