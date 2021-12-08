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

function getEvaluations(token, onChangeDataEvaluations) {
  axios.get(`${serverUrl}/api/v1/student/marks/records`, {
    params: {
      api_token: token,
    }
  })
    .then((response) => {
      onChangeDataEvaluations(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

function getLessons(token, id, scheduleHandler) {
  return axios.get(`${serverUrl}/api/v1/student/lessons`, {
    params: {
      api_token: token,
      schedule_id: id
    }
  }).then((response) => {
    scheduleHandler(response.data.data);
    console.log(response.data.data);
  })
    .catch((error) => {
      console.log(error);
    })
}


function getSchedule(token, scheduleHandler, lessonsHandler) {
  return axios.get(`${serverUrl}/api/v1/student/schedule`, {
    params: {
      api_token: token,
    }
  }).then((response) => {
    scheduleHandler(response.data.data);
    getLessons(token, response.data.data.id, lessonsHandler);
  })
    .catch((error) => {
      console.log(error);
    })
}

export { getSchedule, checkStudent, getProfile, getStudentInfo, getEvaluations, getLessons }
