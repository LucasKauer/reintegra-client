import { handleActions } from 'redux-actions';
import { setAuthState, setAuthError } from './actions';

const initialState = {
  authenticated: false,
  error: null,
};

const reducer = handleActions({
  [setAuthState]: (state, action) => ({
    ...state,
    authenticated: action.payload,
    error: null,
  }),
  [setAuthError]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
}, initialState);

export const isLogged = state => state.auth.authenticated;
export const getError = state => state.auth.error;

export default reducer;
