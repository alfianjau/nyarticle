import React from 'react'
import Article from '../../molecule/article'

const Articles = ({ articles }) => {
  let cards = <h3>Loading...</h3>

  if (articles) {
    cards = articles.map((article, i) => <Article key={i} item={article} />)
  }

  return (
    <div className="article-listing">
      <div className="article-list">{cards}</div>
    </div>
  )
}

export default Articles
