import { app } from './index';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

export default auth;
