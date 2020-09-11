import styled from 'styled-components'
export const MediaSizes = {
  sm: {
    width: '600px',
    value: 600,
  },
  md: {
    width: '960px',
    value: 960,
  },
  lg: {
    width: '1280px',
    value: 1280,
  },
  xl: {
    width: '1920px',
    value: 1920,
  },
}

export const HorizontalPadding = styled.div`
  padding: 0 1rem;
`
export const VerticalPadding = styled.div`
  padding: 1rem 0;
`

export const FullImage = styled.img`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
`

export const ThumbImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0 0 2.1rem 2.1rem;
`
