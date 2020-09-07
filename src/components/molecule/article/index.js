import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { Link } from 'react-router-dom'

const Article = (props) => {
  const { snippet, lead_paragraph, _id } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card title={snippet}>
        {/* <img
          src={`https://nytimes.com/${multimedia[1].url}`}
          className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
          alt="landscape with rainbows, birds and colorful balloons"
        /> */}

        <p>{lead_paragraph}</p>
        <Button
          label="Button Outline Brand"
          variant="outline-brand"
          className="rainbow-m-around_medium"
        >
          <Link to={_id.substr(6)}>Details</Link>
        </Button>
      </Card>
    </div>
  )
}

export default Article
