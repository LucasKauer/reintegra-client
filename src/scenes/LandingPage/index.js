import React from 'react';
import { connect } from 'react-redux';

import bindActionCreators from 'utils/action-binder';
import { isLogged } from 'store/auth';
import { getRegisterModalState } from 'store/register-modal';
import { openModal } from 'store/register-modal/actions';

import Panel from 'components/Panel';
import Button from 'components/Button';

import media from 'utils/media';
import cn from 'utils/cn';

import './landing-page.css';

const LandingPagePanel = ({ children, ...rest }) => (
  <Panel className="landing-page-panel" x="m">
    <Panel
      className={cn('landing-page-panel__content')}
      direction={media.greaterThan.phone() ? 'row' : 'column'}
      justify={media.greaterThan.phone() ? 'space-between' : 'center'}
      between={media.greaterThan.phone() && 'xl'}
      centered
      {...rest}
    >
      {children}
    </Panel>
  </Panel>
);

class LandingPage extends React.Component {
  onClickRegister = event => this.props.openModal();

  render() {
    return (
      <main className="landing-page">
        <LandingPagePanel inline />
        <LandingPagePanel inline />
        <LandingPagePanel column justify="center">
          <h2>Conquiste suas metas profissionais!</h2>
          <Button onClick={this.onClickRegister}>
            REGISTRE-SE AGORA
          </Button>
        </LandingPagePanel>
      </main>
    );
  }
}

export default connect(
  state => ({
    isLogged: isLogged(state),
    registerSteps: getRegisterModalState(state),
  }),
  bindActionCreators({
    openModal,
  })
)(LandingPage);
