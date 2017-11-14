import { handleActions } from 'redux-actions';
import { setUploadResumeState, setUploadResumeError } from './actions';

const initialState = {
  resume: {},
  error: null,
};

const reducer = handleActions({
  [setUploadResumeState]: (state, action) => ({
    ...state,
    resume: action.payload,
    error: null,
  }),
  [setUploadResumeError]: (state, action) => ({
    ...state,
    resume: {},
    error: action.payload,
  }),
}, initialState);

export const getResume = state => state.resume.resume;
export const getError = state => state.resume.error;

export default reducer;
