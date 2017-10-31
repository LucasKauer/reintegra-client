import status from './v1/status';
import user from './v1/user';
import auth from './v1/auth';

export default {
  ...status,
  ...user,
  ...auth,
}

