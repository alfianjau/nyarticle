import axios from 'axios'

const instance = axios.create({
  url: 'https://api.nytimes.com/svc/search/v2',
  params: {
    'api-key': process.env.REACT_APP_NY_API_KEY,
    facet: 'true',
    facet_fields: 'type_of_material',
    facet_filter: 'true',
    fq: 'News',
    sort: 'newest',
  },
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

const resources = {}

const makeRequestCreator = () => {
  let cancel

  return async (query) => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel()
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source()
    try {
      if (resources[query]) {
        // Return result if it exists
        return resources[query]
      }
      const res = await axios(query, { cancelToken: cancel.token })

      const result = res.data.results
      // Store response
      resources[query] = result

      return result
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message)
      } else {
        // Handle usual errors
        console.log('Something went wrong: ', error.message)
      }
    }
  }
}

export const search = makeRequestCreator()
