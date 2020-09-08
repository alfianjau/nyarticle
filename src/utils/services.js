import axios from 'axios'

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

// create async function for axios instance
export async function fetchHits(query, dispatch, cancelToken) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await axios(
      `${BASE_URL}?facet=true&facet_fields=type_of_material&facet_filter=true&fq=News&q=${query}&sort=relevance&api-key=${process.env.REACT_APP_NY_API_KEY}`,
      { cancelToken }
    )
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data.response.docs })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: 'FETCH_FAILURE' })
  }
}
