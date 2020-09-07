import axios from 'axios'

// create redux like mutation
export function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        articles: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    default:
      throw new Error()
  }
}

// create async function for axios instance
export async function fetchHits(query, dispatch, cancelToken) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=true&facet_fields=type_of_material&facet_filter=true&fq=News&q=${query}&sort=relevance&api-key=${process.env.REACT_APP_NY_API_KEY}`,
      { cancelToken }
    )
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data.response.docs })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: 'FETCH_FAILURE' })
  }
}
