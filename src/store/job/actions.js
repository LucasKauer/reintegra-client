import { createAction } from 'redux-actions';

const setJobsState = createAction('SET_JOBS_STATE');
const setJobsError = createAction('SET_JOBS_ERROR');

const getJobs = () => (dispatch, _, api) => {
  api.getJobs()
    .then(({ dados }) => dispatch(setJobsState(dados)))
    .catch(error => dispatch([
      setJobsState([]),
      setJobsError(error.message),
    ]));
};

export {
  getJobs,
  setJobsState,
  setJobsError,
};
