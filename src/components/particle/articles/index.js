import React from 'react'
import Article from '../../molecule/article'

const Articles = ({ articles }) => {
  return (
    <div className="article-listing">
      <div className="article-list">
        {articles &&
          articles.map((article, index) => (
            <Article key={index} item={article} />
          ))}
      </div>
    </div>
  )
}

export default Articles
