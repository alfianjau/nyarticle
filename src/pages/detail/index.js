import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { FullImage } from '../../utils/constant'
import { ContainerMedium } from '../globalStyled'
import { Card, Button, Badge } from 'react-rainbow-components'

const ArticleDetail = (props) => {
  const params = useParams()
  const location = useLocation()
  const {
    web_url,
    multimedia,
    headline,
    byline,
    keywords,
    abstract,
  } = location.item

  return (
    <>
      <ContainerMedium>
        <Button
          label="Button Border"
          variant="neutral"
          className="rainbow-m-around_medium"
        >
          <Link to="/">Back to Home</Link>
        </Button>
        <Card
          title={headline.main}
          footer={
            <div className="rainbow-align-content_space-between">
              <p>{byline.original}</p>
              <Button
                label="Button Border"
                variant="neutral"
                className="rainbow-m-around_medium"
              >
                <a href={web_url} alt="go to NYT">
                  Go to NYT
                </a>
              </Button>
            </div>
          }
        >
          <p>{params.id}</p>
          {multimedia.length ? (
            <FullImage
              className="rainbow-p-around_xx-large"
              src={`https:nytimes.com/${multimedia[1].url}`}
              alt={headline.main}
            />
          ) : (
            <FullImage
              className="rainbow-p-around_xx-large"
              src="https://via.placeholder.com/400x600.png?text=Thou shalt find image"
              alt={headline.main}
            />
          )}
          {keywords.length &&
            keywords.map((keyword, i) => (
              <Badge
                key={i}
                className="rainbow-m-around_medium"
                label={keyword.value}
                variant="lightest"
                title="the badge title"
              />
            ))}
          <p className="App-abstract">{abstract}</p>
        </Card>
      </ContainerMedium>
    </>
  )
}

export default ArticleDetail
