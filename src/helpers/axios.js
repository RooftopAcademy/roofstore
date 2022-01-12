import axios from 'axios';

export const makeGETRequest = async (url, config = {}) => {
  const params = {
    headers: {
      Authorization: 'Bearer token'
    },
    ...config
  };

  try {
    const response = await axios.get(url, params);
    return response;
  } catch (error) {
    console.log('error on fetching GET');
    return error;
  }
};

export const makePOSTRequest = async (url, data = {}, config = {}) => {
  const params = {
    headers: {
      Authorization: 'Bearer token'
    },
    ...config
  };

  try {
    const response = await axios.post(url, data, params);
    return response;
  } catch (error) {
    console.log('error on fetching POST');
    throw new Error(error);
  }  
};
