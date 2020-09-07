import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerMedium } from '../globalStyled'
import { HeadingFlex } from './styled'
import { Card } from 'react-rainbow-components'
// import BackLink from '../../components/back-link'

// const homeUrl = '/'

const ArticleDetail = () => {
  //   const { _id } = useParams()
  //   const { abstract, snippet } = props

  return (
    <>
      {/* <BackLink url={homeUrl} /> */}

      <ContainerMedium>
        <HeadingFlex>
          <Link to="/">back to Home</Link>
          <Card title="testing artikel" />
          {/* <img
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
