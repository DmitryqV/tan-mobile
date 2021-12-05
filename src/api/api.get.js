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

function getSession(token, setDataSession) {
  axios.get(`${serverUrl}/api/v1/student/marks/distributionSession`, {
    params: {
      api_token: token,
    }
  })
    .then((response) => {
      setDataSession(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

function getEducationYear(token, setDataEducationYear) {
  axios.get(`${serverUrl}/api/v1/student/marks/edu-year`, {
    params: {
      api_token: token,
    }
  })
    .then((response) => {
      setDataEducationYear(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

function getSdoLink(token, setLinkSdo) {
  axios.get(`${serverUrl}/api/v1/student/sdo/link`, {
    params: {
      api_token: token,
    }
  })
    .then((response) => {
      console.log(response.data.link);
      setLinkSdo(response.data.link);
    })
    .catch((error) => {
      // console.log(error);
      //нужно обработать ошибку
      alert('К сожалению не можем отобразить данную информацию');
    })
}

function getNews(token, setNewsData) {
  axios.get(`${serverUrl}/api/v1/news`, {
    params: {
      api_token: token,
    }
  })
    .then((request) => {
      setNewsData(request.data.data)
    })
    .catch((error) => {
      console.log(error);
    })
}

export { checkStudent, getProfile, getStudentInfo, getEvaluations, getSession, getEducationYear, getSdoLink, getNews }
