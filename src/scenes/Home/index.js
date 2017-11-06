import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import bindActionCreators from 'utils/action-binder';

import { getProfileModalState, getUserProfileState } from 'store/profile-modal';
import * as profileModalActions from 'store/profile-modal/actions';

import { getJobs, getError } from 'store/job';
import * as jobActions from 'store/job/actions';

import Button from 'components/Button';
import ContactDataForm from 'components/ProfileForm/ContactDataForm';
import Dashboard from 'components/Dashboard';
import Input from 'components/Input';
import JobInformation from './JobInformation';
import Modal from 'components/Modal';
import Panel from 'components/Panel';
import PersonalDataForm from 'components/ProfileForm/PersonalDataForm';
import ResidentialDataForm from 'components/ProfileForm/ResidentialDataForm';

import media from 'utils/media';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      profileSteps: 0,
      userProfile: {},
      jobs: [],
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

  handleCloseProfile = () => this.props.closeProfileModal();

  handleSearch = () => {
    const { search } = this.state;

    this.props
      .getJobsByTitle(search);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <main className="home">
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
            onSaveProfile={() => /* eslint-disable no-console */ console.log('TODO: Implementar')}
            onPrevStep={userProfile => this.props.prevStepProfileModal(this.state, userProfile)}
          />
        </Modal>
        <Panel
          direction={media.greaterThan.tabletLandscape() ? 'row' : 'column'}
          between={media.lessThan.tabletLandscape() && 'xs'}
          y="m"
          x={media.greaterThan.tabletLandscape() ? 'xxl' : 'm'}
        >
          <Panel flex="3" x={media.greaterThan.tabletLandscape() && 'l'}>
            <Input
              fit
              small
              name="search"
              placeholder="Pesquisar"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </Panel>
          <Panel flex="1" x={media.greaterThan.tabletLandscape() && 'l'}>
            <Button fit small onClick={this.handleSearch}>
              Pesquisar
            </Button>
          </Panel>
        </Panel>
        <Dashboard onSearch={this.handleSearch}>
          {this.props.jobs.map(j =>
            (<JobInformation
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
            />)
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
