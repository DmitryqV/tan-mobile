import axios from 'axios';
const serverUrl = 'http://178.154.210.118';

function loginPOST(email, password, onChangeLoginChecker, navigation) {
  axios.post(`${serverUrl}/api/v1/auth/login`, {
    email: email,
    password: password
  })
    .then(function (response) {
      console.log(response);
      onChangeLoginChecker(true);
      navigation.navigate('test');
    })
    .catch(function (error) {
      console.log(error);
      onChangeLoginChecker(false)
    });
}

export { loginPOST }