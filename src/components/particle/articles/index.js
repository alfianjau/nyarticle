import React from 'react'
import { ArticleList, ArticleStyled } from './styled'
import Article from '../../molecule/article'

const Articles = ({ articles }) => {
  return (
    <div className="article-listing">
      <ArticleList>
        {articles &&
          articles.map((article) => (
            <ArticleStyled key={article._id}>
              <Article item={article} />
            </ArticleStyled>
          ))}
      </ArticleList>
    </div>
  )
}

export default Articles
