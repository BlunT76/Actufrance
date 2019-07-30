import axios from 'axios';

const apiGetNewsApiOrg = async (keyword = '') => {
  const request = axios.create({
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  if (keyword.length > 0) {
    const data = JSON.stringify({ keyword });
    const response = await request.post('https://philpereira.alwaysdata.net/api/api.php/newssearch', data)
      .catch((error) => {
        if (!error.status) {
          // network error
          return { data: { code: 523, status: 'error', message: 'Server Is Unreachable. Check your Connexion or Server is Down' } };
        }
      });
    if (response) {
      return response;
    }
  }

  const response = await request.get('https://philpereira.alwaysdata.net/api/api.php/newsfr')
    .catch((error) => {
      if (!error.status) {
        // network error
        return { data: { code: 523, status: 'error', message: 'Server Is Unreachable. Check your Connexion or Server is Down' } };
      }
    });
  if (response) {
    return response;
  }
  return null;
};

export default apiGetNewsApiOrg;
