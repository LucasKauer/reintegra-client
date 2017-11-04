import { handleActions } from 'redux-actions';
import { setJobsState, setJobsError } from './actions';

const initialState = {
  jobs: [],
  error: null,
};

const reducer = handleActions({
  [setJobsState]: (state, action) => ({
    ...state,
    jobs: action.payload,
    error: null,
  }),
  [setJobsError]: (state, action) => ({
    ...state,
    jobs: [],
    error: action.payload,
  }),
}, initialState);

export const getJobs = state => state.job.jobs;
export const getError = state => state.job.error;

export default reducer;
