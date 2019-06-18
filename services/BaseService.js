import Axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

const instance = Axios.create({
  baseURL: BASE_URL
});

export const endpoint = {
  everything: '/everything',
  top: '/top-headlines?country=us'
}
export const apiKey = "44be397509294f5a9f7f7a6ed514f3a5";

export const Sources = {
  business: 'business',
  science: 'science',
  sport: 'sport',
  technology: 'technology',
}

export async function get(endpoint, params) {
  return instance.get(endpoint, {
    params: params
  });
}