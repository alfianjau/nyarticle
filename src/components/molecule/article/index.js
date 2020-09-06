import React from 'react'
import { Card } from 'react-rainbow-components'

const Article = (props) => {
  const { snippet, lead_paragraph, multimedia } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card title={snippet}>
        <img
          src={`https://nytimes.com/${multimedia[0].url}`}
          className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
          alt="landscape with rainbows, birds and colorful balloons"
        />
        <span>{lead_paragraph}</span>
      </Card>
    </div>
  )
}

export default Article
