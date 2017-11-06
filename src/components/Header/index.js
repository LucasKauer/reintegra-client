import React from 'react';

import Panel from 'components/Panel';

import logo from '../../assets/logo.png';

import cn from 'utils/cn';

import './header.css';

const Header = ({children}) => (
  <Panel
    className={cn(
      'header',
    )}
    tag="header"
    row
    x="m"
    align="center"
    justify="space-between"
    sizing="border"
    fit
  >
    <Panel row align="center" between="s">
      <img src={logo} width="50" alt="logo" />
      <h4>reintegra</h4>
    </Panel>
    {children}
  </Panel>
);

export default Header;
