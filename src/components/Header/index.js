import React from 'react';

import Panel from 'components/Panel';

import logo from '../../assets/logo.png';
import loguinho from '../../assets/loguinho.png';

import cn from 'utils/cn';
import media from 'utils/media';

import './header.css';

const Header = ({children}) => (
  <Panel
    className={cn(
      'header',
    )}
    tag="header"
    row
    inset="m"
    align="center"
    justify="space-between"
    sizing="border"
    fit
  >
    <Panel row align="center" between="s">
      <img src={media.greaterThan.phone() ? logo : loguinho} width={media.greaterThan.phone() ? '200' : '65'}alt="logo" />
    </Panel>
    {children}
  </Panel>
);

export default Header;
