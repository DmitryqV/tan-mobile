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

function updatePassword(api_token, current_password, new_password, new_password_confirmation, updatePasswordHandler) {
  axios.post(`${serverUrl}/api/v1/user/profile/password/update`, {
    api_token, current_password, new_password, new_password_confirmation
  })
    .then(function (response) {
      updatePasswordHandler({ successfully: 'Пароль успешно изменен!' });
    })
    .catch(function () {
      updatePasswordHandler({ error: 'Ошибка (Пароль не соответствует длине в 8 символов, параметры не переданы подтверждение не соответствует новому паролю или старый пароль введен некорректно).' })
    });
};

function updatePhone(api_token, phone, updatePhoneHandler) {
  axios.post(`${serverUrl}/api/v1/user/profile/phone/update`, {
    api_token, phone
  }).then(() => {
    updatePhoneHandler({ ok: 'ok' })
  }).catch(() => {
    updatePhoneHandler({ error: 'Ошибка!' });
  })
}

function confirmPhone(api_token, code, confirmPhoneHandler) {
  axios.post(`${serverUrl}/api/v1/user/profile/phone/code`, {
    api_token, code
  }).then(() => {
    confirmPhoneHandler({ ok: 'Телефон привязан!' })
  }).catch(() => {
    confirmPhoneHandler({ error: 'Ошибка (параметр phone отсутствует или номер телефона привязан уже к другому пользователю)' })
  })
}

export { loginPOST, updatePhone, updatePassword, confirmPhone }
