import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import bindActionCreators from 'utils/action-binder';

import { getRegisterModalState } from 'store/register-modal';
import * as registerModalActions from 'store/register-modal/actions';

import { isLogged, getError } from 'store/auth';
import * as authActions from 'store/auth/actions';

import Header from 'components/Header';
import Button from 'components/Button';
import Modal from 'components/Modal';
import UserForm from 'components/UserForm';
import Footer from 'components/Footer';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        registerSteps: 0,
        nickname: '',
        password: '',
      };
    }
  componentDidMount() {
    this.props.goTo(
      this.props.isLogged ? '/' : '/landing'
    );

    if (!this.props.isLogged) {
      this.props.reauthenticate();
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.registerSteps !== prevState.registerSteps) {
      this.setState({ registerSteps: prevProps.registerSteps });
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  });

  handleClose = event => {
    this.setState({
      registerSteps: 0,
      nickname: '',
      password: ''
    })

    this.props.closeModal();
  };

  onLogoutButtonClick = event => this.props.logout();

  onLoginButtonClick = event => this.props.openModal();

  handleLogin = ({ password, nickname }) => {
    this.props
      .login({ password, nickname })
      .then(() => {
        if(!this.props.authError) this.handleClose();
      });
  };

  handleAccountCreation = ({ password, nickname }) => {
    this.props
      .createAccount({ password, nickname })
      .then(this.handleClose);
  }

  render() {
    return (
      <main>
        <Modal onClose={this.handleClose} isOpen={this.state.registerSteps === 1}>
          <UserForm
            error={this.props.authError}
            onLogin={this.handleLogin}
            onCreateAccount={this.handleAccountCreation}
          />
        </Modal>
        <Header>
          <Button small ghost hide={this.props.isLogged} onClick={this.onLoginButtonClick}>
            Entrar
          </Button>
          <Button small ghost hide={!this.props.isLogged} onClick={this.onLogoutButtonClick}>
            Sair
          </Button>
        </Header>
        {this.props.children}
        <Footer />
      </main>
    );
  };
};

export default connect(
  state => ({
    isLogged: isLogged(state),
    authError: getError(state),
    registerSteps: getRegisterModalState(state),
  }),
  bindActionCreators({
    ...authActions,
    ...registerModalActions,
    goTo: path => replace(path),
  })
)(App);
