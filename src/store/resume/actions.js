import { createAction } from 'redux-actions';

const setUploadResumeState = createAction('UPLOAD_RESUME_STATE');
const setUploadResumeError = createAction('UPLOAD_RESUME_ERROR');

const uploadResume = ({ file }) => (dispatch, _, api) => {
  let data = new FormData();
  data.append('file', file);
  data.append('name', 'Resume');
  data.append('description', 'Description')

  api.uploadResume(data)
    .then(({ dados }) => dispatch(setUploadResumeState(dados)))
    .catch(error => dispatch(setUploadResumeError(error.message)));
};

export {
  setUploadResumeState,
  setUploadResumeError,
};
