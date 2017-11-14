import { createAction } from 'redux-actions';

const setJobsState = createAction('SET_JOBS_STATE');
const setJobsError = createAction('SET_JOBS_ERROR');

/* TODO: Remover duplicações de código */
const getJobs = () => (dispatch, _, api) => {
  api.getJobs()
    .then(({ dados }) => dispatch(setJobsState(dados)))
    .catch(error => dispatch(setJobsError(error.message)));
};

const getJobsByTitle = title => (dispatch, _, api) => {
  api.getJobsByTitle(title)
    .then(({ dados }) => dispatch(setJobsState(dados)))
    .catch(error => dispatch(setJobsError(error.message)));
};

export {
  getJobs,
  getJobsByTitle,
  setJobsState,
  setJobsError,
};
