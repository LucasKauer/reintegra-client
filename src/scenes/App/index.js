import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import bindActionCreators from 'utils/action-binder';

import * as profileModalActions from 'store/profile-modal/actions';

import { getRegisterModalState } from 'store/register-modal';
import * as registerModalActions from 'store/register-modal/actions';

import { isLogged, getError } from 'store/auth';
import * as authActions from 'store/auth/actions';

import UserFormModal from './UserFormModal';

import Button from 'components/Button';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Panel from 'components/Panel';

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

  componentWillReceiveProps(nextProps) {
    if (this.props.isLogged !== nextProps.isLogged) {
      this.props.goTo(
        nextProps.isLogged ? '/' : '/landing'
      );
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.registerSteps !== prevState.registerSteps) {
      this.setState({ registerSteps: prevProps.registerSteps });
    }
  }

  handleClose = () => this.props.closeModal();

  onLogoutButtonClick = () => this.props.logout();

  onLoginButtonClick = () => this.props.openModal();

  onProfileButtonClick = () => this.props.openProfileModal();

  handleLogin = ({ password, nickname }) => {
    this.props
      .login({ password, nickname })
      .then(() => {
        if (!this.props.authError) {
          this.handleClose();
        }
      });
  };

  handleAccountCreation = ({ password, nickname }) => {
    this.props
      .createAccount({ password, nickname })
      .then(this.handleClose);
  };

  render() {
    return (
      <main>
        <UserFormModal
          authError={this.props.authError}
          isOpen={this.state.registerSteps === 1}
          onClose={this.handleClose}
          onCreateAccount={this.handleAccountCreation}
          onLogin={this.handleLogin}
        />
        <Header>
          <Panel row inline between="m">
            <Button small ghost hide={this.props.isLogged} onClick={this.onLoginButtonClick}>
              Entrar
            </Button>
            <Button small hide={!this.props.isLogged} onClick={this.onProfileButtonClick}>
              Perfil
            </Button>
            <Button small ghost hide={!this.props.isLogged} onClick={this.onLogoutButtonClick}>
              Sair
            </Button>
          </Panel>
        </Header>
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default connect(
  state => ({
    isLogged: isLogged(state),
    authError: getError(state),
    registerSteps: getRegisterModalState(state),
  }),
  bindActionCreators({
    ...authActions,
    ...registerModalActions,
    ...profileModalActions,
    goTo: path => replace(path),
  })
)(App);
