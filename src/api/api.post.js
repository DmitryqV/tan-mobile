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

function updatePassword({ api_token, current_password, new_password, new_password_confirmation }) {
  return axios.post(`${serverUrl}/api/v1/user/profile/password/update?api_token=${api_token}&current_password=${current_password}&new_password=${new_password}&new_password_confirmation=${new_password_confirmation}`, {
    current_password, new_password, new_password_confirmation
  })
    .then((response) => ({ successfully: 'Пароль успешно изменен!' }))
};

function updatePhone(api_token, phone) {
  axios.post(`${serverUrl}/api/v1/user/profile/phone/update?api_token=${api_token}&phone=${phone}`, {
    api_token, phone
  }).then(() => true).catch(() => false);
}

function confirmPhone(api_token, code) {
  axios.post(`${serverUrl}/api/v1/user/profile/phone/code?api_token=${api_token}&code=${code}`, {
    api_token, code
  }).then(() => true).catch(() => false);
}

export { loginPOST, updatePhone, updatePassword, confirmPhone }
