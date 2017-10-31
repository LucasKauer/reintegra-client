import React from 'react';

import Panel from 'components/Panel';

import cn from 'utils/cn';

import './footer.css';

const Footer = () => (
  <Panel
    tag='footer'
    className={cn(
      'footer',
    )}
  >
    <Panel
      tag='section'
      className='footer__content'
      inset='l'
      between='m'
      row
      justify='space-around'
    >
      <a target='_blank' rel='noopener noreferrer' href='https://www.google.com.br/search?q=(RE)INTEGRA%20%E2%80%93%20PLATAFORMA%20PARA%20AUX%C3%8DLIO%20%C3%80%20REINTEGRA%C3%87%C3%83O%20DE%20EGRESSOS%20DO%20SISTEMA%20PRISIONAL%20BRASILEIRO%20AO%20MERCADO%20DE%20TRABALHO%20FORMAL'>Artigo</a>
      <a target='_blank' rel='noopener noreferrer' href='https://github.com/lucaskauer/reintegra-client'>GitHub</a>
      <a target='_blank' rel='noopener noreferrer' href='https://lucaskauer.github.io/personal-profile'>LucasK</a>
    </Panel>
  </Panel>
);

export default Footer;
