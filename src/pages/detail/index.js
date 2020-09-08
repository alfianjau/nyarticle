import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { ContainerMedium } from '../globalStyled'
import { HeadingFlex } from './styled'
import { Card, CarouselCard, CarouselImage } from 'react-rainbow-components'

const ArticleDetail = (props) => {
  const params = useParams()
  const location = useLocation()
  const { snippet, lead_paragraph, multimedia } = location.item

  return (
    <>
      <ContainerMedium>
        <HeadingFlex>
          <Link to="/">back to Home</Link>
          <p>{params.id}</p>
          <CarouselCard className="rainbow-m_auto">
            {!!multimedia &&
              multimedia.map((image, i) => (
                <CarouselImage
                  src={`https:nytimes.com/${image.url}`}
                  header={image.subtype}
                  description="First card description."
                  alternativeText="First card accessible description."
                />
              ))}
          </CarouselCard>
          <Card title={snippet} />
          <p>{lead_paragraph}</p>
        </HeadingFlex>
      </ContainerMedium>
    </>
  )
}

export default ArticleDetail
