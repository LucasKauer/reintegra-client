import React from 'react';

import Panel from 'components/Panel';

import shortid from 'shortid';

import './job-information-body.css';

/* TODO: Could be more componentized */
const JobInformationBody = ({
  description,
  experience,
  industries,
  employmentStatus,
  jobFunctions,
}) => (
  <Panel row>
    <Panel flex="4" inset="l">
      {description.split('\\n').map(paragraph =>
        <p key={shortid.generate()}>{paragraph}</p>
      )}
    </Panel>
    <Panel flex="1" inset="l" column>
      <Panel className="job-details" inset="xxs" between="xxs" column>
        <h5 className="job-details__label job-details__label-title">Nível de experiência:</h5>
        <p className="job-details__label job-details__label-body">{experience}</p>
      </Panel>
      <Panel className="job-details" inset="xxs" between="xxs" column>
        <h5 className="job-details__label job-details__label-title">Setor:</h5>
        <ul className="job-details__list">
          {industries.map(i =>
            (<li className="job-details__list-item" key={shortid.generate()} >
              <span>{i}</span>
            </li>)
          )}
        </ul>
      </Panel>
      <Panel className="job-details" inset="xxs" between="xxs" column>
        <h5 className="job-details__label job-details__label-title">Tipo de emprego:</h5>
        <p className="job-details__label job-details__label-body">{employmentStatus}</p>
      </Panel>
      <Panel className="job-details" inset="xxs" between="xxs" column>
        <h5 className="job-details__label job-details__label-title">Funções de trabalho:</h5>
        <ul className="job-details__list">
          {jobFunctions.map(f =>
            (<li className="job-details__list-item" key={shortid.generate()} >
              <span>{f}</span>
            </li>)
          )}
        </ul>
      </Panel>
    </Panel>
  </Panel>
);

export default JobInformationBody;
