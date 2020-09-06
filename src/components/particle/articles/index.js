import React from 'react'
// import Article from '../../molecule/article'

const Articles = ({ articles }) => {
  return (
    <div className="article-listing">
      <div className="article-list">
        {articles && articles.map((article) => <h2> {article.text}</h2>)}
      </div>
    </div>
  )
}

export default Articles
