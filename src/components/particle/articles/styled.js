import styled from 'styled-components'

export const ArticleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.2rem;
  margin-right: -1.2rem;
`

export const ArticleStyled = styled.div`
  width: 33%;
  @media screen and (max-width: 991px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
