import React from 'react';

import Input from 'components/Input';

class File extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      file: {},
    };

    this.state = this.initialState;
  }

  handleChange = ({ target }) => {
    const file = target.files[0];
    this.props.uploadResume({ file });
  };

  render() {
    return (
      <Input type="file" name={this.props.name} onChange={this.handleChange} />
    );
  }
}

export default File;
