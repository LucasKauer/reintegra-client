import { createAction } from 'redux-actions';
import cookie from 'utils/cookie';

const setAuthState = createAction('SET_AUTH_STATE');
const setAuthError = createAction('SET_AUTH_ERROR');

const login = credentials => (dispatch, _, api) => api.login(credentials)
  .then(({ dados }) => {
    cookie.set('token', dados.token);
    dispatch(setAuthState(true));
  })
  .catch(error => dispatch([
    setAuthState(false),
    setAuthError(error.message),
  ]));

const reauthenticate = () => (dispatch, _, api) => {
  if (cookie.get().token) {
    api.verifyToken()
      .then(() => dispatch(setAuthState(true)))
      .catch(error => dispatch([
        setAuthState(false),
        setAuthError(error.message),
      ]));
  }
};

const createAccount = user => (dispatch, _, api) => api
  .createAccount(user)
  .then(() => dispatch(login(user)));

const logout = () => dispatch => {
  dispatch(setAuthState(false));
  cookie.set('token', '');
};

export {
  reauthenticate,
  createAccount,
  setAuthState,
  setAuthError,
  login,
  logout,
};
