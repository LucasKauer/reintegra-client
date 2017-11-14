import authReducer from './auth';
import registerReducer from './register-modal';
import jobReducer from './job';
import profileReducer from './profile-modal';
import userReducer from './user';

export default {
  auth: authReducer,
  register: registerReducer,
  job: jobReducer,
  profile: profileReducer,
  user: userReducer,
};
