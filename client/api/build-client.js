import axios from 'axios';

const build_client = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
      baseURL: 'http://www.deep-blue-ocean-ticketing-app.xyz',
      headers: req.headers,
    });

  } else {
    // we must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default build_client;