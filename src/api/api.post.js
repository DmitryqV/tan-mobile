import axios from 'axios';
import storage from '../utils/storage.utils';
const serverUrl = 'http://178.154.210.118';
import { checkStudent } from './api.get';

function loginPOST(email, password, onChangeLoginChecker, onChangeIsLoggedIn) {
  axios.post(`${serverUrl}/api/v1/auth/login`, {
    email: email,
    password: password
  })
    .then(function (response) {
      storage.save({
        key: 'token',
        id: 228,
        data: response.data.token
      });
      checkStudent(response.data.token, onChangeIsLoggedIn, onChangeLoginChecker);
    })
    .catch(function () {
      onChangeLoginChecker('invalidData')
    });
}

export { loginPOST }
