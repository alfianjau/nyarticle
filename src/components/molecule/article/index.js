import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { Link } from 'react-router-dom'

const Article = (props) => {
  const { snippet, lead_paragraph, _id } = props.item

  return (
    <div className="rainbow-p-around_large">
      <Card title={snippet}>
        <p>{lead_paragraph}</p>
        <Button
          label="Button Border"
          variant="neutral"
          className="rainbow-m-around_medium"
        >
          <Link to={{ pathname: _id.substr(6), ...props }}>Details</Link>
        </Button>
      </Card>
    </div>
  )
}

export default Article
