import React from 'react'
import { Card } from 'react-rainbow-components'

const Article = (props) => {
  const { snippet, headline } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card title={headline}>
        <img
          src="images/illustrations/Illustration-rainbow-1.svg"
          className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
          alt="landscape with rainbows, birds and colorful balloons"
        />
        <span>{snippet}</span>
      </Card>
    </div>
  )
}

export default Article
