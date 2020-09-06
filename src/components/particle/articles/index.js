import React from 'react'
import Article from '../../molecule/article'

const Articles = ({ articles }) => {
  return (
    <div className="article-listing">
      <div className="article-list">
        {articles &&
          articles.map((article) => (
            <Article key={article._id} item={article} />
          ))}
      </div>
    </div>
  )
}

export default Articles
