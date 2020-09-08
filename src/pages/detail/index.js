import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { ContainerMedium } from '../globalStyled'
import { HeadingFlex } from './styled'
import { Card } from 'react-rainbow-components'

const ArticleDetail = (props) => {
  const params = useParams()
  const location = useLocation()
  const { snippet, lead_paragraph } = location.item

  return (
    <>
      <ContainerMedium>
        <HeadingFlex>
          <Link to="/">back to Home</Link>
          <p>{params.id}</p>
          <Card title="testing artikel" />
          <p>{snippet}</p>
          <p>{lead_paragraph}</p>
        </HeadingFlex>
      </ContainerMedium>
    </>
  )
}

export default ArticleDetail
