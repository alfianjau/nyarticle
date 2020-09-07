import styled from 'styled-components'
import { MediaSizes } from '../../utils/constant'

export const HeadingFlex = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: ${MediaSizes.sm.width}) {
    flex-direction: column;
  }
`
