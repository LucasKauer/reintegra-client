import React from 'react';

import Card from 'components/Card';
import Panel from 'components/Panel';

import cn from 'utils/cn';
import media from 'utils/media';

import './dashboard.css';

const Dashboard = ({
  children,
  className,
  noPad,
  style,
}) => (
  <Panel
    column
    fit
    style={{
      ...style,
    }}
    className={
      cn(
        'dashboard__content',
        (noPad || media.lessThan.tabletLandscape()) && 'dashboard__content--no-pad',
        className
      )
    }
    between={media.greaterThan.phone() ? 'l' : 'm'}
  >
    {children && children.map(child =>
      <Card className="dashboard__card" noPad key={child.key}>
        {child}
      </Card>
    )}
  </Panel>
);

export default Dashboard;
