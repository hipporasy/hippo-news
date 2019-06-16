import Axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

const instance = Axios.create({
    baseURL: BASE_URL
});

export const everythingEndPoint = 'everything?apiKey=44be397509294f5a9f7f7a6ed514f3a5';

export const Sources = {
  business: 'business',
  science: 'science',
  sport: 'sport',
}

export const ApiMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
};

export function request(endpoint, method, params, callback) {

    switch (method) {
      case ApiMethod.get:
        instance.get(endpoint, {
          params: params
        })
          .then(response => {
            callback(response, null);
          })
          .catch(error => {
            callback(null, error)
          });
        break;
  
      case ApiMethod.post:
        instance.post(endpoint, params)
          .then(response => {
            callback(response, null);
          })
          .catch(error => {
            callback(null, error)
          });
        break;
  
      case ApiMethod.put:
        instance.put(endpoint, params)
          .then(response => {
            callback(response, null);
          })
          .catch(error => {
            callback(null, error)
          });
        break;
      case ApiMethod.delete:
        instance.delete(endpoint)
          .then(response => {
            callback(response, null);
          })
          .catch(error => {
            callback(null, error)
          });
        break;
      default:
        break;
    }
  }