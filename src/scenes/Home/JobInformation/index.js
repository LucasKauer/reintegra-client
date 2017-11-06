import React from 'react';

import shortid from 'shortid';

import Panel from 'components/Panel';

import './job-information.css';

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
            <li className="job-details__list-item" key={shortid.generate()} >
              <span>{i}</span>
            </li>
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
            <li className="job-details__list-item" key={shortid.generate()} >
              <span>{f}</span>
            </li>
          )}
        </ul>
      </Panel>
    </Panel>
  </Panel>
);

const JobInformation = ({
  title,
  company,
  city,
  state,
  country,
  creationDate,
  description,
  experience,
  industries,
  employmentStatus,
  jobFunctions,
}) => (
  <Panel>
    <JobInformationHeader
      title = {title}
      company = {company}
      city = {city}
      state = {state}
      country = {country}
      creationDate = {creationDate}
    />
    <JobInformationBody
      description = {description}
      experience = {experience}
      industries = {industries}
      employmentStatus = {employmentStatus}
      jobFunctions = {jobFunctions}
    />
  </Panel>
);

export default JobInformation;
