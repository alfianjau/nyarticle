import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
})

export default {
  getData: () =>
    instance({
      method: 'GET',
      url: '/query',
      params: {
        search: 'parameter',
      },
    }),
  postData: () =>
    instance({
      method: 'POST',
      url: '/api',
      data: {
        item1: 'data1',
        item2: 'item2',
      },
      headers: {
        'content-type': 'application/json', // override instance defaults
      },
    }),
}
