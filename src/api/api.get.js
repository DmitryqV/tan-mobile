import axios from 'axios';
const serverUrl = 'http://178.154.210.118';

function checkStudent(token, onChangeIsLoggedIn, onChangeLoginChecker) {
  axios.get(`${serverUrl}/api/v1/is/student`, {
    params: {
      api_token: token,
    }
  })
    .then(function (response) {
      if (response.data[0] === 'true') {
        onChangeIsLoggedIn(true)
      } else {
        onChangeLoginChecker('notStudent')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getProfile(token, onChangeDataProfile) {
  axios.get(`${serverUrl}/api/v1/user/profile`, {
    params: {
      api_token: token,
    }
  })
    .then(function (response) {
      onChangeDataProfile(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function getStudentInfo(token, onChangeStudentInfo) {
  axios.get(`${serverUrl}/api/v1/user/profile/student`, {
    params: {
      api_token: token,
    }
  })
    .then(function (response) {
      onChangeStudentInfo(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export { checkStudent, getProfile, getStudentInfo }
