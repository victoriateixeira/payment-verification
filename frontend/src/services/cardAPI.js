import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001',
});

const postAPI = async (obj) => {
  const {data} = await api.post('verification', obj);
  return data;
};

export {postAPI};
