import axios from 'axios';
import storage from '../utils/storage.utils';
const serverUrl = 'http://178.154.210.118';
import { checkStudent } from './api.get';

function loginPOST(email, password, onChangeLoginChecker, navigation) {
  axios.post(`${serverUrl}/api/v1/auth/login`, {
    email: email,
    password: password
  })
    .then(function (response) {
      onChangeLoginChecker(true);
      storage.save({
        key: 'token',
        id: 228,
        data: response.data.token
      });
      checkStudent(response.data.token, navigation);
    })
    .catch(function (error) {
      onChangeLoginChecker(false)
    });
}

export { loginPOST }
