import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import bindActionCreators from 'utils/action-binder';

import { getProfileModalState, getUserProfileState } from 'store/profile-modal';
import * as profileModalActions from 'store/profile-modal/actions';

import { getJobs, getError } from 'store/job';
import * as jobActions from 'store/job/actions';

import Dashboard from 'components/Dashboard';
import JobInformation from './JobInformation';
import Modal from 'components/Modal';
import PersonalDataForm from 'components/ProfileForm/PersonalDataForm';
import ResidentialDataForm from 'components/ProfileForm/ResidentialDataForm';
import ContactDataForm from 'components/ProfileForm/ContactDataForm';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileSteps: 0,
      userProfile: {},
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
    if (prevProps.userProfile !== prevState.userProfile) {
      this.setState({ userProfile: prevProps.userProfile });
    }
  }

  handleCloseProfile = event => this.props.closeProfileModal();

  render() {
    return (
      <main className='home'>
        <Modal onClose={this.handleCloseProfile} isOpen={this.state.profileSteps === 1}>
          <PersonalDataForm
            userProfile={this.props.userProfile}
            onNextStep={userProfile => this.props.nextStepProfileModal(this.state, userProfile)}
          />
        </Modal>
        <Modal onClose={this.handleCloseProfile} isOpen={this.state.profileSteps === 2}>
          <ResidentialDataForm
            userProfile={this.props.userProfile}
            onNextStep={userProfile => this.props.nextStepProfileModal(this.state, userProfile)}
            onPrevStep={userProfile => this.props.prevStepProfileModal(this.state, userProfile)}
          />
        </Modal>
        <Modal onClose={this.handleCloseProfile} isOpen={this.state.profileSteps === 3}>
          <ContactDataForm
            userProfile={this.props.userProfile}
            onSaveProfile={() => console.log("TODO: Implementar")}
            onPrevStep={userProfile => this.props.prevStepProfileModal(this.state, userProfile)}
          />
        </Modal>
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
    profileSteps: getProfileModalState(state),
    userProfile: getUserProfileState(state),
    jobs: getJobs(state),
    jobsError: getError(state),
  }),
  bindActionCreators({
    ...profileModalActions,
    ...jobActions,
  })
)(Home);
