import React from 'react';
import { connect } from 'react-redux';

import './home.css';

class Home extends React.Component {

  render() {
    return (
      <main className='home'>
        <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
        <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
        <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
        <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
        <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
        {this.props.children}
      </main>
    );
  }
}

export default connect()(Home);
