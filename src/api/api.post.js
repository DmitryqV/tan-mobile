import axios from 'axios';

function login(email, password) {
  axios.post('http://178.154.210.118/api/v1/auth/login', {
    email: email,
    password: password
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { login }