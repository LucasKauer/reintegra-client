import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

export default connect()(Home);
