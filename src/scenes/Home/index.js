import React from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';

import bindActionCreators from 'utils/action-binder';

import { getProfileModalState } from 'store/profile-modal';
import * as profileModalActions from 'store/profile-modal/actions';

import { getUserInfoState } from 'store/user';
import * as userActions from 'store/user/actions';

import { getJobs, getError } from 'store/job';
import * as jobActions from 'store/job/actions';

import ProfileFormModal from './ProfileFormModal';

import Button from 'components/Button';
import Dashboard from 'components/Dashboard';
import Input from 'components/Input';
import JobInformation from './JobInformation';
import Panel from 'components/Panel';

import media from 'utils/media';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      profileSteps: 0,
      userInfo: {},
      jobs: [],
    };
  }

  componentDidMount() {
    this.props.getJobs();
    /* TODO: Obter o nickname do usuário */
    this.props.getUserInfoByNickname('lucaskauer');
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.profileSteps !== prevState.profileSteps) {
      this.setState({ profileSteps: prevProps.profileSteps });
    }
    if (prevProps.userInfo !== prevState.userInfo) {
      this.setState({ userInfo: prevProps.userInfo });
    }
  }

  handleCloseProfile = () =>
    this.props
      .closeProfileModal()
      .then(() => /* TODO: Obter o nickname do usuário */ this.props.getUserInfoByNickname('lucaskauer'));

  handleNextStep = userInfo => {
    this.props
      .nextStepProfileModal(this.state)
      .then(() => this.props.updateUserInfo(this.state, userInfo));
  }

  handlePrevStep = userInfo =>
    this.props
      .prevStepProfileModal(this.state)
      .then(() => this.props.updateUserInfo(this.state, userInfo));

  handleSaveUserInfo = userInfo =>
    this.props
      .saveUserInfo(this.state, userInfo)
      .then(this.handleCloseProfile);

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
        <ProfileFormModal
          isOpenPersonalDataForm={this.state.profileSteps === 1}
          isOpenResidentialDataForm={this.state.profileSteps === 2}
          isOpenContactDataForm={this.state.profileSteps === 3}
          onClose={this.handleCloseProfile}
          onNextStep={this.handleNextStep}
          onPrevStep={this.handlePrevStep}
          onSaveUserInfo={this.handleSaveUserInfo}
          userInfo={this.props.userInfo}
        />
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
    userInfo: getUserInfoState(state),
    jobs: getJobs(state),
    jobsError: getError(state),
  }),
  bindActionCreators({
    ...profileModalActions,
    ...userActions,
    ...jobActions,
  })
)(Home);
