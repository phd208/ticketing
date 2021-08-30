import axios from 'axios';

const build_client = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server

    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
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