import styled from 'styled-components'

export const MainWrapper = styled.main`
  position: relative;
  width: 100%;
  padding-bottom: 43px;
  background-color: ${(props) =>
    props.theme.rainbow.palette.background.secondary};
  font-family: Lato, sans-serif;
  color: ${(props) => props.theme.rainbow.palette.text.title};
  font-weight: 400;
  min-height: 100vh;
  z-index: 1;
`

export const ChildrenWrapper = styled.main`
  width: 81%;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 991px) {
    width: 90%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  :before {
    content: '';
    height: 20rem;
    width: 100vw;
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 0.9) 0%,
      rgba(79, 253, 238, 0.9) 0%,
      rgba(218, 243, 241, 0.12) 60%
    );
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`
