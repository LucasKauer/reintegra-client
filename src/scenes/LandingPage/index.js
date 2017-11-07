import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import bindActionCreators from 'utils/action-binder';
import { isLogged } from 'store/auth';
import { getRegisterModalState } from 'store/register-modal';
import { openModal } from 'store/register-modal/actions';

import DescriptionPanel from './Panel/Description';
import PhoneImagePanel from './Panel/PhoneImage';
import LandingPagePanel from './Panel';

import Button from 'components/Button';
import Panel from 'components/Panel';

import './landing-page.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.panelInfos = [
      {
        id: shortid.generate(),
        description: (<p>A plataforma <span>REINTEGRA</span>, objetiva a minimizar as principais dificuldades enfrentadas por egressos de penitenciárias brasileiras ao tentar se reinserir na sociedade</p>),
        fileName: 'phone-image-logo',
      },
      {
        id: shortid.generate(),
        description: (<p>Através de um sistema de busca e ofertas de vagas de emprego, além de cursos de qualificação profissional.</p>),
        fileName: 'phone-image-home',
      },
      {
        id: shortid.generate(),
        description: (<p>Aos egressos serão ofertados cursos com base nos seus interesses e experiências, bem como a possibilidade de candidatar-se gratuitamente. Ainda, será possível visualizar e candidatar-se a vagas de emprego.</p>),
        fileName: 'phone-image-job',
      },
      {
        id: shortid.generate(),
        description: (<p>As empresas será disponibilizado uma API, possibilitando a divulgação de treinamentos e vagas de emprego.</p>),
        fileName: 'phone-image-company',
      },
    ];
  }

  getPanelInfo = (description, fileName, index) => {
    return index % 2 === 0
      ?
      (<Panel>
        <DescriptionPanel description={description} />
        <PhoneImagePanel fileName={fileName} />
      </Panel>)
      :
      (<Panel>
        <PhoneImagePanel fileName={fileName} />
        <DescriptionPanel description={description} />
      </Panel>);
  };

  render() {
    return (
      <main className="landing-page">
        {this.panelInfos.map(({ id, description, fileName }, index) =>
          (<LandingPagePanel inline key={id}>
            {this.getPanelInfo(description, fileName, index).props.children}
          </LandingPagePanel>)
        )}
        <LandingPagePanel column justify="center" textAlign="center" between>
          <p>A população carcerária brasileira carece de atenção no cunho político-social, dificultando a reincorporação destes ao meio social. <span>Faça a sua parte e colabore com o projeto!</span></p>
          <Panel fit row between="m">
            <Button fit small href="https://github.com/lucaskauer/reintegra-server">
              reintegra-server
            </Button>
            <Button fit small href="https://github.com/lucaskauer/reintegra-client">
              reintegra-client
            </Button>
          </Panel>
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
