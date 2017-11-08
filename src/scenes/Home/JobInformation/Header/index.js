import React from 'react';

import Panel from 'components/Panel';

const JobInformationHeader = ({
  title,
  company,
  city,
  state,
  country,
  creationDate,
}) => (
  <Panel column centered inset="l" between="xxs">
    <h2>{title}</h2>
    <small>
      <span>{`${company} - ${city}/${state}, ${country}`}</span>
    </small>
    <small>
      <span>{`Anunciada em ${(new Date(creationDate)).toLocaleString('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric' })}`}</span>
    </small>
  </Panel>
);

export default JobInformationHeader;
