import React from 'react';

import Panel from 'components/Panel';

import cn from 'utils/cn';
import media from 'utils/media';

import './landing-page-panel.css';

const LandingPagePanel = ({ children, ...rest }) => (
  <Panel className="landing-page-panel" x="m">
    <Panel
      className={cn('landing-page-panel__content')}
      direction={media.greaterThan.phone() ? 'row' : 'column'}
      justify={media.greaterThan.phone() ? 'space-between' : 'center'}
      between={media.greaterThan.phone() && 'l'}
      inline={media.greaterThan.phone() && 'l'}
      textAlign="justify"
      centered
      {...rest}
    >
      {children}
    </Panel>
  </Panel>
);

export default LandingPagePanel;
