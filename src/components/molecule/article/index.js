import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { Link } from 'react-router-dom'
import { HorizontalPadding, FullImage } from '../../../utils/constant'

const Article = (props) => {
  const {
    snippet,
    lead_paragraph,
    _id,
    multimedia,
    headline,
    source,
  } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card title={snippet} footer={<span>{source}</span>}>
        <HorizontalPadding>
          {multimedia.length ? (
            <FullImage
              src={`https:nytimes.com/${multimedia[1].url}`}
              alt={headline.main}
            />
          ) : (
            <FullImage
              src="https://via.placeholder.com/400x600.png?text=Thou shalt find image"
              alt={headline.main}
            />
          )}
          <p style={{ textAlign: 'left' }}>{lead_paragraph}</p>
          <Button
            label="Button Border"
            variant="neutral"
            className="rainbow-m-around_medium"
          >
            <Link to={{ pathname: _id.substr(6), ...props }}>Details</Link>
          </Button>
        </HorizontalPadding>
      </Card>
    </div>
  )
}

export default Article
