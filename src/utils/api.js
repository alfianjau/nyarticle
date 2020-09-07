import axios from 'axios'

export default axios.create({
  url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: {
    'api-key': process.env.REACT_APP_NY_API_KEY,
    facet: 'true',
    facet_fields: 'type_of_material',
    facet_filter: 'true',
    fq: 'News',
    sort: 'relevance',
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
})
