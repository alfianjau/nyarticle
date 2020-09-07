import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContainerMedium } from '../globalStyled'
import { HeadingFlex } from './styled'
import { Card } from 'react-rainbow-components'
// import BackLink from '../../components/back-link'

// const homeUrl = '/'

const ArticleDetail = (props) => {
  const params = useParams()
  // const { snippet, lead_paragraph, _id } = props.item

  return (
    <>
      {/* <BackLink url={homeUrl} /> */}

      <ContainerMedium>
        <HeadingFlex>
          <Link to="/">back to Home</Link>
          <p>{params.id}</p>
          <Card title="testing artikel" />
          {/*<p>{snippet}</p>
          <p>{_id}</p>
           <img
          src={`https://nytimes.com/${multimedia[1].url}`}
          className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
          alt="landscape with rainbows, birds and colorful balloons"
        /> */}
        </HeadingFlex>
      </ContainerMedium>
    </>
  )
}

export default ArticleDetail
