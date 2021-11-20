import axios from 'axios';
const serverUrl = 'http://178.154.210.118';

function checkStudent(token, navigation) {
  axios.get(`${serverUrl}/api/v1/is/student`, {
    params: {
      api_token: token,
    }
  })
    .then(function (response) {
      console.log(response);
      navigation.navigate('profile');
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getProfile(token) {
  axios.get(`${serverUrl}/api/v1/user/profile`, {
    params: {
      api_token: token,
    }
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export { checkStudent, getProfile }
