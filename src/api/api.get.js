import axios from 'axios';
const serverUrl = 'http://178.154.210.118';

function checkStudent(token, onChangeIsLoggedIn) {
  axios.get(`${serverUrl}/api/v1/is/student`, {
    params: {
      api_token: token,
    }
  })
    .then(function () {
      onChangeIsLoggedIn(true)
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

function getEvaluations(token) {
  axios.get(`${serverUrl}/api/v1/student/marks/records`, {
    params: {
      api_token: token,
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
}

export { checkStudent, getProfile, getStudentInfo, getEvaluations }
