import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import bindActionCreators from 'utils/action-binder';

import { getJobs, getError } from 'store/job';
import * as jobActions from 'store/job/actions';

import Dashboard from 'components/Dashboard';
import JobInformation from './JobInformation';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileSteps: 0,
      jobs: []
    };
  }

  componentDidMount() {
    this.props.getJobs();
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.profileSteps !== prevState.profileSteps) {
      this.setState({ profileSteps: prevProps.profileSteps });
    }
  }

  render() {
    return (
      <main className='home'>
        <Dashboard>
          {this.props.jobs.map(j =>
            <JobInformation
              key={shortid.generate()}
              title = {j.title}
              company = {j.company}
              city = {j.city}
              state = {j.state}
              country = {j.country}
              creationDate = {j.creationDate}
              description = {j.description}
              experience = {j.experience}
              industries = {j.industries}
              employmentStatus = {j.employmentStatus}
              jobFunctions = {j.jobFunctions}
            />
          )}
        </Dashboard>
        {this.props.children}
      </main>
    );
  }
}

export default connect(
  state => ({
    profileSteps: 0,
    jobs: getJobs(state),
    jobsError: getError(state),
  }),
  bindActionCreators({
    ...jobActions,
  })
)(Home);
