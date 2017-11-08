import React from 'react';

import JobInformationBody from './Body';
import JobInformationHeader from './Header';

import Panel from 'components/Panel';

import './job-information.css';

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
